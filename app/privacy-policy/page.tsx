import type { Metadata } from 'next'
import { LegalLayout } from '@/components/legal/LegalLayout'
import styles from '@/components/legal/PrivacyPolicy.module.css'
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Shardwise handles website enquiries, technical data, service providers, Gmail authorization, retention and privacy requests.',
  alternates: { canonical: '/privacy-policy/' },
}
const sections = [
  { id: 'privacy-overview', label: 'Introduction and scope' },
  { id: 'section-1', label: 'Information we collect' },
  { id: 'privacy-use', label: 'How we use information' },
  { id: 'privacy-cookies', label: 'Cookies and tracking' },
  { id: 'section-3', label: 'Service providers and sharing' },
  { id: 'section-4', label: 'Data retention' },
  { id: 'privacy-rights', label: 'Your privacy rights' },
  { id: 'privacy-transfers', label: 'International processing' },
  { id: 'privacy-security', label: 'Security measures' },
  { id: 'privacy-children', label: 'Children’s privacy' },
  { id: 'section-2', label: 'Gmail authorization' },
  { id: 'section-5', label: 'Policy changes' },
  { id: 'privacy-contact', label: 'Contact and requests' },
]
export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="4 October 2026" sections={sections}>
      <div className={styles.content}>
        <h2 id="privacy-overview">Introduction and scope</h2>
        <p>
          Shardwise (“we” or “us”) uses this website to explain its services and receive project
          enquiries. This policy covers visitors to shardwise.pages.dev, people contacting us, and
          the operator’s inquiry notification application, currently named Shardwise Notifications
          Test on Google’s authorization screen.
        </p>
        <p>
          It explains what information may be processed, why it is used, and how to contact us about
          it. Project-specific handling may also be described in a client agreement. Third-party
          websites reached through links have their own policies. The privacy contact for Shardwise
          is <a href="mailto:info.shardwise@gmail.com">info.shardwise@gmail.com</a>.
        </p>
        <h2 id="section-1">Information we collect</h2>
        <div
          className={styles.tableWrap}
          role="region"
          aria-label="Information categories and sources"
          tabIndex={0}
        >
          <table>
            <caption>Information associated with website visits and enquiries</caption>
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Examples</th>
                <th scope="col">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Enquiry details</th>
                <td>Name, email address, selected service, and project message</td>
                <td>Information you enter in the contact form or send by email</td>
              </tr>
              <tr>
                <th scope="row">Correspondence</th>
                <td>Replies and project information you choose to share</td>
                <td>Our communications with you</td>
              </tr>
              <tr>
                <th scope="row">Technical and security data</th>
                <td>IP address, browser information, request times, and security signals</td>
                <td>Requests processed by hosting and security providers</td>
              </tr>
              <tr>
                <th scope="row">Operator authorization</th>
                <td>
                  OAuth credentials, access and refresh tokens, and email delivery identifiers
                </td>
                <td>The operator’s Google authorization and notification delivery</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Providing enquiry information is voluntary, but we need sufficient contact details and
          context to respond. Do not include passwords, payment card details, or sensitive personal
          information in the form. Visitors do not need a Google account or Gmail authorization to
          contact us.
        </p>
        <h2 id="privacy-use">How we use information</h2>
        <ul>
          <li>
            <strong>Responding to you:</strong> understand your enquiry, discuss the requested
            services, and follow up on the work you asked about.
          </li>
          <li>
            <strong>Project administration:</strong> manage relevant correspondence and agreed work
            where you become a client.
          </li>
          <li>
            <strong>Operating the website:</strong> deliver pages, diagnose errors, and prevent
            spam, fraud, or abuse.
          </li>
          <li>
            <strong>Business and legal records:</strong> meet applicable obligations and address
            disputes or security incidents.
          </li>
          <li>
            <strong>Notifications:</strong> deliver enquiry details to the operator when the
            notification integration is enabled.
          </li>
        </ul>
        <p>
          Where EU or UK data protection law applies, the relevant basis may be steps you request
          before a contract, performance of an agreement, legal obligations, or legitimate interests
          in responding to enquiries and keeping the site secure. Where a use relies on consent, it
          can be withdrawn. Contact us for the basis relevant to your information.
        </p>
        <p>
          We do not use contact-form details for unrelated advertising or email newsletters. The
          website does not make automated decisions about visitors with legal or similarly
          significant effects; security checks may filter suspected automated or abusive requests.
        </p>
        <h2 id="privacy-cookies">Cookies and tracking</h2>
        <p>
          The website application does not currently include Google Analytics, advertising pixels,
          or a newsletter signup. Hosting and security services may process request information or
          use necessary technical storage to provide their services. When enabled, Cloudflare
          Turnstile checks submissions for abuse before they are accepted.
        </p>
        <p>
          A browser-local debugging preference can enable performance metrics in the browser
          console. The application does not send those metrics to an analytics service. No
          advertising or analytics cookie preference center is currently provided. You can inspect,
          block, or clear cookies and site storage through your browser settings; blocking necessary
          storage may affect functionality. We will update this notice before introducing new
          tracking uses.
        </p>
        <h2 id="section-3">Service providers and sharing</h2>
        <p>
          Information is available to the operator and people authorized to handle your enquiry.
          Providers process the information needed for the functions below. The Gmail and Supabase
          notification integration is being prepared for production; its database and delivery
          processing applies when enabled.
        </p>
        <div
          className={styles.tableWrap}
          role="region"
          aria-label="Service providers and purposes"
          tabIndex={0}
        >
          <table>
            <caption>Providers relevant to the website and enquiry handling</caption>
            <thead>
              <tr>
                <th scope="col">Provider</th>
                <th scope="col">Purpose</th>
                <th scope="col">Provider policy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Cloudflare</th>
                <td>Website hosting, request handling, and security checks where enabled</td>
                <td>
                  <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare privacy policy</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Google / Gmail</th>
                <td>Email correspondence and authorized notification delivery</td>
                <td>
                  <a href="https://policies.google.com/privacy">Google privacy policy</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Supabase</th>
                <td>
                  Private enquiry records, submission times, and notification status when enabled
                </td>
                <td>
                  <a href="https://supabase.com/privacy">Supabase privacy policy</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Resend</th>
                <td>Email delivery if the existing form’s Resend configuration is enabled</td>
                <td>
                  <a href="https://resend.com/legal/privacy-policy">Resend privacy policy</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We do not sell enquiry information or share it for cross-context behavioral advertising.
          We may disclose relevant information where required by law or necessary to address fraud,
          abuse, or legal claims. Enquiries are not published on the website.
        </p>
        <h2 id="section-4">Data retention</h2>
        <p>
          We retain enquiry details and related correspondence while needed to respond, follow up on
          requested work, maintain relevant business records, or meet legal obligations. Retention
          depends on the enquiry’s status, ongoing client work, applicable recordkeeping
          requirements, and unresolved disputes. We do not promise automatic deletion after an
          unconfirmed fixed period.
        </p>
        <p>
          Technical logs and provider backups follow the relevant provider’s configuration and
          retention processes. OAuth tokens are retained while the operator’s Gmail connection is
          enabled. A deletion request can cover relevant enquiry records and emails controlled by
          Shardwise, subject to applicable exceptions; backups may remain until their normal
          retention cycle ends.
        </p>
        <h2 id="privacy-rights">Your privacy rights</h2>
        <p>
          Your rights depend on the laws applicable to your information and the purpose of
          processing. You can contact us to request access, correction, or deletion, or to ask how
          your information is handled.
        </p>
        <h3>EU and UK rights, where applicable</h3>
        <ul>
          <li>Request access to personal information and correction of inaccurate details.</li>
          <li>
            Request erasure or restriction of processing in the circumstances provided by law.
          </li>
          <li>Request a portable copy of information where the right to portability applies.</li>
          <li>
            <strong>Object to processing based on legitimate interests</strong>, including
            explaining your particular circumstances.
          </li>
          <li>
            Withdraw consent where processing relies on it, without affecting prior lawful
            processing.
          </li>
          <li>
            Raise a complaint with your local data protection authority; UK residents can contact
            the <a href="https://ico.org.uk/make-a-complaint/">Information Commissioner’s Office</a>
            .
          </li>
        </ul>
        <h3>California rights, where applicable</h3>
        <p>
          Where the California Consumer Privacy Act applies, rights may include knowing and
          accessing personal information, correction, deletion, opting out of sale or sharing, and
          limiting certain uses of sensitive information. We do not sell enquiry information or
          share it for cross-context behavioral advertising. You may exercise applicable rights
          without unlawful discrimination. An authorized agent may contact us with evidence of their
          authority.
        </p>
        <h2 id="privacy-transfers">International processing</h2>
        <p>
          Our hosting, email, and database providers operate internationally, so information may be
          processed outside your country. Storage locations depend on the active provider services
          and configurations. Contact us for information about the locations and transfer safeguards
          relevant to your enquiry.
        </p>
        <p>
          Where a transfer is restricted by applicable law, it must have an appropriate legal basis
          and required safeguards. You can request information about the applicable transfer
          arrangements using the contact details below.
        </p>
        <h2 id="privacy-security">Security measures</h2>
        <p>
          The website uses HTTPS. Access to enquiry information should be limited to people who need
          it for the stated purposes. The planned production notification integration uses
          server-side secrets and restricted database access; OAuth credentials are not intended for
          website JavaScript or public source code. Local authorization tests store credentials in
          the operator’s private Windows user profile.
        </p>
        <p>
          No method of transmission or storage guarantees absolute security. If you think
          information sent to us has been exposed or misused, contact the privacy email below so the
          concern can be investigated.
        </p>
        <h2 id="privacy-children">Children’s privacy</h2>
        <p>
          This website and its business services are not directed to children under 13. We do not
          knowingly seek personal information from children through this site. If you believe a
          child has provided personal information, contact us so we can investigate and remove
          information where appropriate.
        </p>
        <h2 id="section-2">Gmail authorization and Google data</h2>
        <p>
          Only the operator authorizes the designated Gmail account. The notification application
          requests <code>gmail.send</code> permission to send enquiry notifications. It does not
          request access to inbox messages, contacts, or Google Drive files, and does not request or
          store the Gmail password.
        </p>
        <p>
          When enabled, notifications contain enquiry details and an enquiry identifier, with the
          visitor’s email used as Reply-To. Google processes the content and addresses for email
          delivery and mailbox storage. OAuth tokens authorize sending; returned message identifiers
          help track delivery.
        </p>
        <p>
          Shardwise’s use and transfer of information received from Google APIs adheres to the{' '}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including its Limited Use requirements. Google user data is not sold, used for
          advertising, or used to train generalized artificial intelligence or machine-learning
          models.
        </p>
        <p>
          The operator can revoke authorization in{' '}
          <a href="https://myaccount.google.com/connections">Google Account connections</a> and
          remove stored credentials. Revocation stops future authorized sending but does not
          automatically delete enquiry records or previously delivered emails.
        </p>
        <h2 id="section-5">Changes to this policy</h2>
        <p>
          We update this page when data practices change and revise the date above. Material changes
          will be described on this page; additional notices or permissions will be provided where
          required. Any new Google account access requiring additional permission needs the account
          holder’s authorization.
        </p>
        <h2 id="privacy-contact">Contact and privacy requests</h2>
        <p>
          Email <a href="mailto:info.shardwise@gmail.com">info.shardwise@gmail.com</a> with the
          subject “Privacy request.” Describe the request and, where possible, use the address
          associated with your enquiry. We may request proportionate information to verify your
          identity or an agent’s authority; do not send passwords or identity documents unless a
          secure method has been agreed.
        </p>
        <p>
          We respond within the time limits required by applicable law and explain any relevant
          exception or extension. If we must retain information for a legal obligation, we will
          explain the reason. You can also use the <a href="/contact/">contact page</a> to find our
          contact details, but direct email is the preferred route for privacy requests while the
          form integration is being finalized.
        </p>
      </div>
    </LegalLayout>
  )
}
