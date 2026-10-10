import type { Metadata } from 'next'
import { LegalLayout } from '@/components/legal/LegalLayout'
import styles from '@/components/legal/TermsContent.module.css'
export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Website use and project agreement framework for Shardwise services, including scope, payments, intellectual property, handover and contact.',
  alternates: { canonical: '/terms/' },
}
const sections = [
  { id: 'terms-introduction', label: 'Introduction and acceptance' },
  { id: 'terms-definitions', label: 'Definitions' },
  { id: 'terms-scope', label: 'Scope of services' },
  { id: 'terms-client', label: 'Client responsibilities' },
  { id: 'terms-payment', label: 'Fees and payment terms' },
  { id: 'terms-timeline', label: 'Timelines and milestones' },
  { id: 'terms-revisions', label: 'Revisions and change requests' },
  { id: 'section-1', label: 'Intellectual property rights' },
  { id: 'terms-confidentiality', label: 'Confidentiality and project data' },
  { id: 'terms-third-party', label: 'Third-party services and licences' },
  { id: 'section-2', label: 'Warranties and disclaimers' },
  { id: 'terms-liability', label: 'Responsibility and limitation of liability' },
  { id: 'terms-indemnity', label: 'Client materials and third-party claims' },
  { id: 'terms-termination', label: 'Suspension and termination' },
  { id: 'terms-handover', label: 'After termination and handover' },
  { id: 'terms-law', label: 'Governing law and jurisdiction' },
  { id: 'terms-disputes', label: 'Questions and dispute resolution' },
  { id: 'terms-changes', label: 'Changes to these terms' },
  { id: 'terms-contact', label: 'Contact and legal enquiries' },
]
export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="4 October 2026" sections={sections}>
      <div className={styles.content}>
        <section aria-labelledby="terms-introduction">
          <h2 id="terms-introduction">Introduction and acceptance</h2>
          <p>
            These Terms &amp; Conditions explain the use of shardwise.pages.dev and the general
            framework for discussing services with Shardwise (“we” or “us”). Please read them before
            using the website or asking us to begin work. Website information introduces our
            capabilities; submitting an enquiry does not by itself create a paid project, reserve
            capacity, or authorize charges.
          </p>
          <p>
            A service engagement begins when the parties accept a written project agreement,
            proposal, or Statement of Work using the agreed acceptance process. That document
            identifies the parties, deliverables, commercial terms, and any project-specific
            conditions. Where it differs from this general framework, the accepted project agreement
            governs the engagement, subject to applicable law. Ask us about any unclear term before
            accepting an engagement.
          </p>
        </section>
        <section aria-labelledby="terms-definitions">
          <h2 id="terms-definitions">Definitions</h2>
          <p>
            “Client” means the person or organization entering a project agreement with Shardwise.
            “Services” means the work described in that agreement. “Deliverables” means the specific
            code, designs, documentation, or other outputs identified for delivery. “Statement of
            Work” or “SOW” means the accepted document defining project scope and responsibilities;
            a Master Services Agreement may provide additional terms.
          </p>
          <p>
            “Client materials” means content, data, brand assets, instructions, or access supplied
            by the client. “Third-party services” means tools, platforms, assets, and infrastructure
            supplied by others. “Written agreement” includes documents accepted through the process
            the parties agree to use. A conversation, estimate, or example on this website should be
            confirmed in the project agreement before it is treated as an approved commitment.
          </p>
        </section>
        <section aria-labelledby="terms-scope">
          <h2 id="terms-scope">Scope of services</h2>
          <p>
            Shardwise’s service areas include application and website development, maintenance,
            design, and search optimization. The precise work for a client is described in the
            accepted SOW, including deliverables, supported platforms, dependencies, and acceptance
            criteria. Website descriptions help explain service areas but do not replace the project
            scope or guarantee that every listed activity is included in every engagement.
          </p>
          <p>
            Work outside the accepted scope needs a written change agreement. Hosting, domains,
            ongoing maintenance, content production, migration, training, or third-party
            subscriptions are included only where agreed. Review any assumptions and exclusions
            before the project starts so both parties understand what the deliverables cover.
          </p>
        </section>
        <section aria-labelledby="terms-client">
          <h2 id="terms-client">Client responsibilities</h2>
          <p>
            The client provides accurate requirements and the content, assets, approvals, and
            authorized access needed for the agreed work. Please identify an approval contact,
            supply materials in the agreed format, and provide consolidated feedback at the review
            points set out in the project plan. You remain responsible for having the permissions
            needed to use the materials and data you supply.
          </p>
          <p>
            Share account access through an agreed secure method rather than sending passwords
            through the public enquiry form. Tell us about relevant platform restrictions,
            compliance requirements, and existing supplier obligations before work begins. Missing
            inputs or delayed approvals can affect delivery; the parties should discuss the impact
            and confirm a revised plan rather than assume that the original schedule remains
            achievable.
          </p>
        </section>
        <section aria-labelledby="terms-payment">
          <h2 id="terms-payment">Fees and payment terms</h2>
          <p>
            Fees, currency, applicable taxes, payment methods, invoice timing, and any deposit are
            stated in the accepted project agreement. The engagement may be organized around a
            defined project, agreed milestones, or ongoing work, as confirmed in that document. A
            website enquiry is not a purchase, and public service descriptions are not a binding
            price quotation.
          </p>
          <p>
            Review invoices against the agreed scope and raise a disputed amount promptly with the
            reasons for the dispute. Any late-payment charge, suspension right, cancellation charge,
            or refund condition must be expressly agreed and lawful. These website terms do not
            introduce a default deposit percentage, interest rate, invoice deadline, or blanket
            non-refundable payment rule.
          </p>
          <p>
            Additional work and third-party costs should be approved before they are incurred.
            Refunds or credits are assessed under the accepted agreement and applicable statutory
            rights, including the work performed and the reason for the request. If you need a
            purchase order or a particular billing process, disclose it during scoping so it can be
            included in the commercial arrangements.
          </p>
        </section>
        <section aria-labelledby="terms-timeline">
          <h2 id="terms-timeline">Timelines and milestones</h2>
          <p>
            Delivery dates, review periods, milestones, and launch responsibilities are agreed in
            the project plan. Estimates depend on the scope, availability of client inputs,
            technical dependencies, and timely decisions. The parties should identify blockers early
            and confirm changes to the schedule when requirements, approvals, or platform conditions
            change.
          </p>
          <p>
            Events outside a party’s reasonable control, such as infrastructure outages or natural
            disasters, may affect delivery. The affected party should explain the impact and discuss
            reasonable mitigation and revised dates. Any contractual relief, notice period, or right
            to end the engagement because of such an event is determined by the accepted agreement
            and applicable law.
          </p>
        </section>
        <section aria-labelledby="terms-revisions">
          <h2 id="terms-revisions">Revisions and change requests</h2>
          <p>
            The SOW defines review stages, included revision rounds, acceptance criteria, and the
            process for reporting issues. Feedback should identify the affected deliverable and
            explain the requested change. A correction needed to meet an agreed acceptance criterion
            should be distinguished from a new feature or a change to an approved direction.
          </p>
          <p>
            Before additional scope proceeds, the parties confirm its effect on fees, delivery
            dates, and dependencies in writing. No default number of revisions or hourly rate is
            introduced by this page. Keep approved versions and review decisions available so later
            requests can be assessed against the agreed brief.
          </p>
        </section>
        <section aria-labelledby="section-1">
          <h2 id="section-1">Intellectual property rights</h2>
          <p>
            All bespoke software, designs, and deliverables created for clients are transferred
            according to individual master service agreements or accepted project agreements. Those
            documents specify whether the client receives ownership, a licence, or another right,
            which deliverables are covered, and when the transfer becomes effective. Any condition
            linking transfer to payment must be agreed in that document.
          </p>
          <p>
            Client materials remain subject to the client’s existing ownership and permissions.
            Pre-existing tools, reusable libraries, and third-party components are not automatically
            assigned with bespoke work; the project agreement and applicable licences determine the
            rights needed to use them. Ownership of rejected concepts, work in progress, and source
            files should be addressed during scoping.
          </p>
          <p>
            Portfolio use, client names, logos, and case-study publication should be agreed with the
            client and respect confidentiality and third-party permissions. Delivery does not itself
            authorize public disclosure of confidential work. Confirm asset licences and any ongoing
            subscription requirements before publishing or distributing the finished product.
          </p>
        </section>
        <section aria-labelledby="terms-confidentiality">
          <h2 id="terms-confidentiality">Confidentiality and project data</h2>
          <p>
            Project confidentiality obligations are set out in the accepted agreement or a separate
            nondisclosure agreement. Identify confidential information and permitted recipients
            before sharing business plans, customer data, private source code, or commercially
            sensitive material. The parties should use agreed access controls and share information
            only with people who need it for the work.
          </p>
          <p>
            The agreement should address permitted disclosures, legal disclosure obligations,
            information already public, and the return or deletion of confidential materials.
            Website enquiry handling is described in the{' '}
            <a href="/privacy-policy/">Privacy Policy</a>. A project involving personal information
            may require additional data-processing instructions or an agreement; those requirements
            should be discussed before that information is provided.
          </p>
        </section>
        <section aria-labelledby="terms-third-party">
          <h2 id="terms-third-party">Third-party services and licences</h2>
          <p>
            A project may depend on hosting, domain registrars, app stores, payment gateways,
            plugins, fonts, images, or software platforms operated by others. Their licences,
            acceptable-use rules, prices, availability, and technical restrictions are governed by
            their own terms. The SOW identifies who opens or controls accounts, who pays recurring
            fees, and which integrations are included.
          </p>
          <p>
            A third-party change or outage may require additional review or work. Agree the response
            and any cost through the project’s change process. Do not assume that paying for a
            development deliverable includes indefinite hosting, premium licences, store approval,
            or ongoing subscriptions unless the project agreement expressly includes them.
          </p>
        </section>
        <section aria-labelledby="section-2">
          <h2 id="section-2">Warranties and disclaimers</h2>
          <p>
            Website materials are provided for general information. Unless specified in a formal
            Service Level Agreement, they do not carry a promise of continuous uninterrupted
            operation. Project-specific warranties, correction periods, support coverage, and
            acceptance standards are stated in the accepted agreement and remain subject to any
            rights required by applicable law.
          </p>
          <p>
            Search rankings, traffic, sales, app-store decisions, and other business outcomes depend
            on factors beyond development or design work. They are not guaranteed by a public
            service description. Report a deliverable issue with sufficient detail to reproduce it
            so it can be assessed against the agreed scope. These terms do not remove statutory
            service standards or remedies that cannot lawfully be excluded.
          </p>
        </section>
        <section aria-labelledby="terms-liability">
          <h2 id="terms-liability">Responsibility and limitation of liability</h2>
          <p>
            Any negotiated liability cap, allocation of risk, or treatment of indirect losses
            belongs in the accepted project agreement. This general page does not create an
            unconfirmed cap based on project fees or impose a universal exclusion of business
            losses. Claims are assessed under the applicable agreement and law, including the
            circumstances and cause of the loss.
          </p>
          <p>
            Nothing in these terms excludes responsibility for fraud, death or personal injury
            caused by negligence where exclusion is prohibited, or any other liability or statutory
            right that cannot lawfully be limited. The parties should discuss material risks, backup
            responsibilities, launch approvals, and insurance requirements when scoping the work.
          </p>
        </section>
        <section aria-labelledby="terms-indemnity">
          <h2 id="terms-indemnity">Client materials and third-party claims</h2>
          <p>
            The client should ensure it has the permissions needed for supplied content, assets, and
            data, and should tell Shardwise about restrictions on their use. If a third-party claim
            concerns those materials, notify the other party promptly and preserve relevant
            information so the issue can be investigated.
          </p>
          <p>
            Any obligation to indemnify or reimburse a party for a claim must be expressly set out
            in the project agreement, including its scope and the process for handling the claim.
            These website terms do not impose an unlimited indemnity or transfer responsibility for
            another party’s unlawful conduct. Mandatory legal protections continue to apply.
          </p>
        </section>
        <section aria-labelledby="terms-termination">
          <h2 id="terms-termination">Suspension and termination</h2>
          <p>
            Either party may raise a request to pause or end an engagement through the contact and
            notice process in its agreement. Notice periods, termination for convenience, breach
            procedures, opportunities to remedy a breach, and any non-payment suspension rights are
            determined by that agreement and applicable law.
          </p>
          <p>
            Discuss the effect on active milestones, approved third-party costs, access, and
            delivery before a pause or termination where practicable. Document the reason, effective
            date, and agreed next steps. These terms do not introduce an automatic cancellation
            penalty or authorize withholding property contrary to the agreement or applicable law.
          </p>
        </section>
        <section aria-labelledby="terms-handover">
          <h2 id="terms-handover">After termination and handover</h2>
          <p>
            The parties reconcile completed work, approved costs, outstanding invoices, and any
            appropriate credits under the agreement. Deliverables, source files, documentation, and
            access are handed over in accordance with the agreed ownership and licence rights.
            Transfer account ownership where required and remove access that is no longer necessary.
          </p>
          <p>
            The treatment of work in progress and the timing of handover should be agreed in
            writing. Retention or deletion of personal information follows the{' '}
            <a href="/privacy-policy/">Privacy Policy</a>, project instructions, and legal
            recordkeeping requirements. Confidentiality and other provisions intended to continue
            after termination remain subject to the accepted agreement.
          </p>
        </section>
        <section aria-labelledby="terms-law">
          <h2 id="terms-law">Governing law and jurisdiction</h2>
          <p>
            The governing law and any agreed court or forum for a service engagement should be
            specified in the accepted project agreement. This page does not select a city, country,
            or exclusive court without that agreement. Where no valid choice has been made, the
            rules of applicable law determine the relevant law and forum.
          </p>
          <p>
            A contractual choice does not remove mandatory consumer protections or other rights that
            cannot lawfully be waived. If a jurisdiction or legal-notice requirement is important to
            your procurement process, raise it before accepting the project agreement.
          </p>
        </section>
        <section aria-labelledby="terms-disputes">
          <h2 id="terms-disputes">Questions and dispute resolution</h2>
          <p>
            Start by sending a written explanation of the issue, the relevant engagement, and the
            outcome you are seeking. The parties can discuss a practical resolution, review project
            records, and consider mediation where both agree. This communication process does not
            prevent a party from using a remedy available under applicable law.
          </p>
          <p>
            Binding arbitration applies only if separately and validly agreed; it is not imposed by
            these website terms. Any dispute procedure, location, cost allocation, or escalation
            deadline should be stated in the project agreement. Keep copies of the accepted scope,
            approvals, and correspondence relevant to the dispute.
          </p>
        </section>
        <section aria-labelledby="terms-changes">
          <h2 id="terms-changes">Changes to these terms</h2>
          <p>
            We may revise this page as the website or service framework changes and update the date
            above. Review the current version before starting a new engagement. A change to this
            public page does not automatically rewrite an existing accepted project agreement;
            amendments to that engagement follow its agreed amendment process.
          </p>
          <p>
            Where an update requires notice or acceptance under applicable law or the agreement, the
            relevant process must be followed. If one provision is unenforceable, the effect on the
            remaining provisions is determined by applicable law rather than treated as permission
            to remove statutory protections.
          </p>
        </section>
        <section aria-labelledby="terms-contact">
          <h2 id="terms-contact">Contact and legal enquiries</h2>
          <p>
            For questions about these terms, email{' '}
            <a href="mailto:info.shardwise@gmail.com">info.shardwise@gmail.com</a> with the subject
            “Terms enquiry” and enough information to identify the project or issue. This is the
            current operator contact. Project agreements should specify the contracting parties and
            any formal address or method required for legal notices.
          </p>
          <p>
            Sending a general email does not replace a contractual or statutory notice method where
            one is required. Avoid including passwords or sensitive documents unless a secure
            exchange method has been agreed. You can also review our{' '}
            <a href="/privacy-policy/">Privacy Policy</a> for information about enquiry data and
            privacy requests.
          </p>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Terms & Conditions',
            url: 'https://shardwise.pages.dev/terms/',
            dateModified: '2026-10-04',
            inLanguage: 'en',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Shardwise',
              url: 'https://shardwise.pages.dev/',
            },
          }),
        }}
      />
    </LegalLayout>
  )
}
