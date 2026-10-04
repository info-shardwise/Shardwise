import type { Metadata } from 'next'
import { LegalLayout } from '@/components/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Shardwise handles contact inquiries and Gmail notification authorization, including data use, storage, sharing and deletion.',
  alternates: { canonical: '/privacy-policy/' },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="3 October 2026"
      sections={[
        { id: 'section-1', label: 'Information you provide' },
        { id: 'section-2', label: 'Gmail access and notification use' },
        { id: 'section-3', label: 'Storage and service providers' },
        { id: 'section-4', label: 'Retention, access and deletion' },
        { id: 'section-5', label: 'Policy changes' },
      ]}
    >
      <p>
        This policy covers the Shardwise website at shardwise.pages.dev and its inquiry notification
        application, currently named Shardwise Notifications Test on the Google authorization
        screen. For privacy questions, contact{' '}
        <a href="mailto:virenstudio.in@gmail.com" className="text-[#11C5F5] underline">
          virenstudio.in@gmail.com
        </a>
        .
      </p>

      <h2 id="section-1" className="text-xl font-bold text-white pt-4">
        Information you provide
      </h2>
      <p>
        When you send an inquiry, you provide your name, email address, selected service and project
        message. We use these details to understand your request, contact you and discuss the
        services you requested. Please do not include passwords, payment card details or other
        sensitive information in the form. Visitors do not need to sign in with Google or connect a
        Gmail account.
      </p>
      <p>
        Our hosting and security providers may process technical information such as IP address,
        browser and device information, request timestamps and security signals to deliver the site,
        diagnose errors and prevent spam or abuse. When enabled, Cloudflare Turnstile checks
        submissions before they are accepted.
      </p>

      <h2 id="section-2" className="text-xl font-bold text-white pt-4">
        Gmail access and notification use
      </h2>
      <p>
        Only the Shardwise operator authorizes the notification application to use a designated
        Gmail account. The application requests the gmail.send permission
        (https://www.googleapis.com/auth/gmail.send) to send inquiry notifications to the
        operator&apos;s designated inbox. It does not request permission to read inbox messages,
        contacts or Google Drive files. We do not ask for or store the Gmail account password.
      </p>
      <p>
        Notifications contain the inquiry details and an inquiry identifier. The visitor&apos;s
        email address is used as Reply-To so the operator can respond directly. Google processes the
        email content and addresses to deliver and retain the message within Gmail. The application
        receives OAuth access and refresh tokens and, after delivery, a Gmail message identifier.
        Tokens are used only to authorize notification sending; message identifiers help track
        delivery.
      </p>
      <p>
        Shardwise&apos;s use and transfer of information received from Google APIs adheres to the{' '}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          className="text-[#11C5F5] underline"
        >
          Google API Services User Data Policy
        </a>
        , including its Limited Use requirements. We do not sell Google user data, use it for
        advertising, or use it to train generalized artificial intelligence or machine-learning
        models.
      </p>

      <h2 id="section-3" className="text-xl font-bold text-white pt-4">
        Storage and service providers
      </h2>
      <p>
        The Gmail notification integration is being prepared for production. When enabled, inquiries
        are stored in a private Supabase database with their submission time and notification
        status. Cloudflare hosts the website and submission endpoint and processes security checks;
        Supabase provides database storage; Google provides Gmail delivery and mailbox storage.
        These providers process information needed to perform their respective services under their
        own terms and privacy policies. Inquiry information is accessible to the operator and people
        authorized to handle the request, rather than published on the website.
      </p>
      <p>
        Local authorization testing stores OAuth credentials and tokens in the operator&apos;s
        private Windows user profile. For production, private credentials and tokens are stored as
        server-side secrets in Cloudflare. They are not included in website JavaScript or committed
        to the public website code. Database access is restricted on the server, and network
        requests use HTTPS. No method of storage or transmission can guarantee absolute security.
      </p>
      <p>
        We share inquiry data with these providers for the stated purposes and with authorized
        people responding to the inquiry. We may also disclose information when required by
        applicable law or to address fraud, abuse or security incidents. We do not sell inquiry
        information or use contact-form details for unrelated advertising. Provider infrastructure
        may process information in countries other than your own.
      </p>

      <h2 id="section-4" className="text-xl font-bold text-white pt-4">
        Retention, access and deletion
      </h2>
      <p>
        We retain inquiries and related correspondence while needed to respond, follow up on
        requested work, maintain relevant business records or meet legal obligations. We do not
        promise automatic deletion after a fixed period. You can request access, correction or
        deletion of your inquiry by emailing virenstudio.in@gmail.com from the address used in your
        inquiry. We may need to confirm your identity before acting and will explain if information
        must be retained for a legal obligation. Deletion requests cover relevant database records
        and notification emails controlled by Shardwise; service-provider backups follow their own
        retention processes.
      </p>
      <p>
        OAuth tokens are retained while the operator&apos;s Gmail connection is enabled. The
        operator can revoke access through{' '}
        <a href="https://myaccount.google.com/connections" className="text-[#11C5F5] underline">
          Google Account connections
        </a>{' '}
        and remove stored credentials to disconnect the integration. Revoking access stops future
        authorized sending but does not automatically remove inquiries or emails already saved.
      </p>

      <h2 id="section-5" className="text-xl font-bold text-white pt-4">
        Policy changes
      </h2>
      <p>
        We update this page when our data practices change and revise the date above. Any new use of
        Google account data requiring additional permission will require the account holder&apos;s
        authorization. Contact virenstudio.in@gmail.com if you have questions about this policy.
      </p>
    </LegalLayout>
  )
}
