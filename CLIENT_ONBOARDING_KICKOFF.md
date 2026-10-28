# Client Onboarding & Project Kickoff Pack
**VentaBlk Co. — Reusable operational checklist**  
**Status:** Draft for review  
**Use:** One copy per new hospital website client. This is an internal process guide; send only appropriate client-facing requests, not internal notes.

## Client-facing onboarding assets

Use these standalone templates alongside this internal operating guide. Copy client-specific completed versions only into the approved access-controlled client workspace:

- [Client Welcome Pack](CLIENT_WELCOME_PACK.md)
- [Standalone Welcome Email](CLIENT_WELCOME_EMAIL.md)
- [Website Discovery Questionnaire](CLIENT_DISCOVERY_QUESTIONNAIRE.md)
- [Asset & Content Collection Checklist](CLIENT_ASSET_AND_CONTENT_CHECKLIST.md)
- [Kickoff Agenda & Action Summary](CLIENT_KICKOFF_AGENDA_AND_ACTIONS.md)

The email draft in Section 8 below is retained as a fallback; use the standalone welcome email as the canonical client-facing version and keep the links and project facts consistent.

## 1. Before sending onboarding requests

- [ ] Confirm client has accepted the proposal/statement of work.
- [ ] Confirm contract, payment milestone, project start conditions, and change-request process.
- [ ] Identify one client decision-maker and one backup contact.
- [ ] Confirm who approves design, website content, clinical claims, and launch.
- [ ] Create the client project repository and project folder in the approved storage location.
- [ ] Copy and begin filling CLIENT_INFORMATION_TEMPLATE.md using client-confirmed facts.
- [ ] Create a project task board with owners, due dates, dependencies, and approval states.
- [ ] Confirm what VentaBlk will provide versus what the client must supply.
- [ ] Share the communication channel, meeting cadence, expected response times, and escalation route.

## 2. Kickoff meeting agenda

Suggested 30–45 minute agenda:
1. Business goals and intended audiences.
2. Primary conversion: phone call, appointment enquiry, WhatsApp, contact form, or another action.
3. Pages, services, departments, doctors, and content scope.
4. Design references, brand assets, accessibility, and responsive expectations.
5. Content accuracy, approvals, and who verifies medical/clinical claims.
6. Existing domain, hosting, website, analytics, Search Console, and Google Business Profile.
7. Form requirements and data handling, especially careers uploads or patient-related information.
8. Timeline, dependencies, review windows, launch conditions, and maintenance expectations.
9. Confirm action items, owners, and due dates.

## 3. Client information request checklist

Send the client only the requests that apply to their project.

### Organization and contacts
- [ ] Official public-facing name and, where required, legal business details.
- [ ] Public address, map pin, contact numbers, email, hours, and emergency instructions.
- [ ] Main project contact and final approver.
- [ ] Services/departments and service descriptions.
- [ ] Target audience, geographic area served, and preferred languages.

### Brand and design
- [ ] Logo in vector format if available (SVG/PDF) and transparent PNG.
- [ ] Brand colors, fonts, and brand guidelines if they exist.
- [ ] Approved staff/doctor photos and written permission for their use.
- [ ] Hospital/facility photos, certificates/awards if verified, and other approved assets.
- [ ] Reference websites and notes on what the client likes or dislikes.

### Content and medical accuracy
- [ ] About/overview copy and verified organizational history.
- [ ] Service descriptions and department details.
- [ ] Doctor names, specialties, qualifications, and registration details where appropriate, verified by the client.
- [ ] Appointment process, visiting information, FAQs, and contact instructions.
- [ ] Testimonials only when authentic, authorized, and compliant with applicable rules.
- [ ] Named clinical reviewer for medical content and approval deadline.

### Website and technical access
- [ ] Current website URL and list of existing important pages.
- [ ] Domain registrar and DNS administrator; record account owner, not password.
- [ ] Hosting platform and deployment owner.
- [ ] Existing analytics and Search Console properties and who controls them.
- [ ] Google Business Profile URL and authorized owner/manager.
- [ ] Existing form, appointment, CRM, email, or careers system requirements.
- [ ] Approved access method. Use delegated access or an approved password manager; never ask for credentials in ordinary email or store them in this record.

### Forms and privacy
- [ ] Required fields and reason for each field.
- [ ] Who receives submissions and who can access them.
- [ ] Destination system, retention/deletion policy, and failure handling.
- [ ] Careers application and CV upload needs.
- [ ] Confirmation of whether any patient/health information is required. If yes, stop and design a separately approved secure workflow; do not use a generic marketing form by default.
- [ ] Client-provided privacy notice and consent requirements, reviewed as appropriate.

## 4. Kickoff decision register

| Decision | Agreed outcome | Owner | Date / status |
|---|---|---|---|
| Primary conversion | | | |
| Page inventory | | | |
| Design approver | | | |
| Content/clinical reviewer | | | |
| Domain/hosting owner | | | |
| Form destination | | | |
| Launch target | | | |
| Maintenance plan | | | |

## 5. Project folder and repository setup

Create a project-specific structure appropriate to the stack, for example:

    client-project/
    ├── README.md
    ├── CLIENT_INFORMATION.md
    ├── design/
    │   ├── approved-references.md
    │   └── approval-records.md
    ├── content/
    │   └── content-inventory.md
    ├── assets/
    │   └── README.md
    ├── technical/
    │   ├── architecture-decisions.md
    │   └── redirects.md
    ├── qa/
    │   ├── responsive-qa.md
    │   └── launch-checklist.md
    └── operations/
        └── maintenance-scope.md

Do not commit confidential contracts, private invoices, access credentials, patient records, CVs, form submissions, or other sensitive personal information. Store those in an appropriate access-controlled system. The client record should contain approved non-sensitive facts and links to secure locations, not secrets.

## 6. Kickoff exit criteria

Do not begin full production implementation until:
- [ ] Scope and commercial terms are accepted.
- [ ] Primary goal and conversion are agreed.
- [ ] Page inventory and key features are agreed.
- [ ] Design direction and approval owner are known.
- [ ] Content/assets owners and clinical reviewers are assigned.
- [ ] Domain/hosting/access owners are identified.
- [ ] Form and data-handling requirements are understood.
- [ ] Timeline, client dependencies, and review windows are documented.
- [ ] Risks, assumptions, and out-of-scope items are recorded.

If information is missing, log it as a dependency with an owner and due date instead of inventing it or silently blocking the project.

## 7. After kickoff

Within one working day, send a concise recap with:
- Agreed scope and primary goal.
- Decisions made.
- Information/assets still needed.
- Action items, owners, and due dates.
- Next milestone and expected client review date.

Update CLIENT_INFORMATION.md, the task board, and project README with durable decisions. Update the agency OS progress tracker only for agency-wide process changes, not every client task.

## 8. Client-facing onboarding email/message draft

Subject: Website project kickoff — information and next steps

Hello [Client Name],

Thank you for choosing VentaBlk Co. for your website project.

To get started smoothly, we’ll gather the approved business information, services, branding assets, website requirements, and the appropriate technical access. We’ll also confirm the primary goal of the website and the person who will approve design and content.

Please share the requested information and assets through the agreed secure channel. Please do not send passwords, patient information, or other sensitive records by ordinary email. We’ll arrange an approved access method wherever needed.

Once we receive the required materials, we’ll confirm the page structure, milestones, and next review date.

Thank you,  
**ventablk.co**  
AGENCY

## 9. Review log

- Initial draft: 15 October 2026.
- Review after the next real hospital kickoff and adjust the checklist based on actual client friction.
