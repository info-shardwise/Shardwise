# Production contact form setup

## Flow

The browser submits to /api/contact. The Cloudflare Pages Function checks Turnstile, validates input, inserts one private Supabase row, then sends a Gmail notification with the visitor address as Reply-To. A receipt means the inquiry was saved. Gmail errors keep the inquiry in Supabase and set notification_status to failed; pending or failed rows require manual review. Automatic email retries are not enabled.

## 1. Production Google authorization

In Google Auth Platform > Audience, change Testing to In production. Google may still require verification for broader use; publishing does not mean verification. Run the local gmail-test.mjs authorize command again and complete its NEW link. Keep credentials and tokens in %LOCALAPPDATA%\ShardwiseGmailTest, never in this repository.

## 2. Supabase

Create or choose the Shardwise project. Run supabase/contact-submissions.sql in the SQL editor. RLS is enabled with no browser policies. Anonymous visitors cannot read or write the table. The server uses the project's secret/service role key; never put it in NEXT_PUBLIC variables. Use the Supabase Table Editor to review inquiries and failed/pending notifications.

## 3. Turnstile

Create a managed Cloudflare Turnstile widget for shardwise.pages.dev. Set its action in the website to contact (the component already does this). Do not use testing keys in production.

## 4. Cloudflare Pages production secrets

In shardwise > Settings > Variables and secrets, configure the following. Use encrypted secrets for all private keys and tokens:

- SUPABASE_URL: project's HTTPS URL
- SUPABASE_SERVICE_ROLE_KEY: server-only secret/service-role key
- GMAIL_CLIENT_ID: credentials.json web.client_id
- GMAIL_CLIENT_SECRET: credentials.json web.client_secret
- GMAIL_REFRESH_TOKEN: newly authorized tokens.json refresh_token
- GMAIL_SENDER: authorized Gmail address
- GMAIL_RECIPIENT: chosen notification inbox
- TURNSTILE_SITE_KEY: public widget site key
- TURNSTILE_SECRET_KEY: private widget secret

The function reads these at runtime. The frontend fetches only the public Turnstile site key. Leave preview environments unconfigured unless a separate testing setup is intentional. Do not paste secret values into chat.

## 5. Validate and deploy

Run node --test tests/contact.test.mjs, npm run lint, npx tsc --noEmit, and npm run build. Commit and push main only after the production services are ready. Cloudflare Git integration builds out plus functions/api/contact.js. Verify the production contact page with one explicitly authorized dummy inquiry: check the success message, Supabase row, Gmail delivery, and Reply-To. Also check invalid data and network errors do not claim success.

## Scheduled database activity and health checks

The `Supabase daily database health check` GitHub workflow runs daily at 04:17 UTC (09:47 Asia/Kolkata), and can also be run manually. It calls `/api/health/supabase`, whose Cloudflare Pages Function uses the existing production Supabase secrets to read at most one contact ID. The response exposes only `{ "ok": true }` or `{ "ok": false }`; it never returns contact data, inserts fake inquiries, or sends email. No additional GitHub secrets are needed. Failed checks retry twice, then fail the workflow so GitHub Actions notifications can report the outage.

Resume the currently paused project once at https://supabase.com/dashboard/project/kcncwevephypldshgsgn before expecting successful checks. A database query cannot resume an already paused project. After resuming, manually run the workflow and confirm a green result. Keep the repository's Actions failure notifications enabled.

This provides daily database activity and monitoring, not an uptime guarantee. Supabase may pause Free projects with low activity; Pro is its documented guarantee against inactivity pausing: https://supabase.com/docs/guides/deployment/going-into-prod#availability. GitHub schedules can be delayed, and public-repository scheduled workflows are disabled after 60 days without repository activity: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule. Re-enable the workflow if disabled. Check that the daily runs remain green.

## Limits

Gmail quotas and Supabase/Cloudflare free-plan limits still apply. Monitor failures and account health. Set a retention policy for inquiries appropriate to your business. Saved pending/failed rows do not have an automatic retry scheduler in this release.
