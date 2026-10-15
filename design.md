# VentaBlk Co. — Hospital Website Design Specification

Status: Draft for review  
Last updated: 2026-10-15

## Purpose

Define the reusable design rules for hospital websites built by VentaBlk Co. The goal is a consistent, accessible, responsive, trustworthy experience without making every hospital website look identical.

This document defines the design process and system. Client-specific colors, typography, imagery, layouts, and features must be recorded in that project's own design brief or approved design specification.

## 1. Design principles

- **Trust first:** Clear hospital identity, verified information, professional imagery, and easy-to-find contact details.
- **Patient-focused:** Organize pages around what visitors need to know or do; avoid confusing jargon and unnecessary steps.
- **Distinctive per client:** Reuse components and engineering patterns, not an identical visual design.
- **Clarity over decoration:** Motion and visual effects must not interfere with reading, navigation, accessibility, or performance.
- **Mobile-first responsiveness:** Layouts must adapt fluidly to available space and input method.
- **Accessible by default:** Support keyboard use, readable contrast, visible focus, clear labels, and understandable errors.
- **Performance-conscious:** Optimize images and fonts, minimize unnecessary JavaScript, and avoid oversized assets.

## 2. Design tokens and visual identity

Every project should document:

- Brand colors, including primary, secondary, surface, text, border, success, warning, and error colors.
- Font families, weights, type scale, line heights, and fallback fonts.
- Spacing scale, content width, grid rules, border radii, shadows, and layering.
- Button, link, form, card, navigation, and focus-state styles.
- Icon style, image treatment, illustration style, and motion rules.
- Logo variants, minimum display size, clear space, and approved backgrounds.

Use semantic design tokens rather than scattering raw color and spacing values through components. Confirm brand assets and usage rights with the client. Do not assume every hospital should use the same color palette or dark/light theme.

## 3. Page and component system

Select pages based on the signed scope. A typical hospital site may include:

- Home
- About the hospital
- Departments and services
- Doctors and qualifications
- Facilities
- Appointment/contact
- Careers
- Patient information or FAQs
- Privacy policy and other required legal notices

Common reusable components may include:

- Header, desktop navigation, mobile navigation, and footer
- Hero and primary call-to-action
- Service/department cards
- Doctor profile cards
- Facility/gallery sections
- Contact details and location information
- Appointment or enquiry forms
- FAQ, breadcrumbs, alerts, success/error states, and cookie/privacy controls where required

Every component must define its purpose, content requirements, variants, interactive states, and responsive behavior. Avoid adding sections just because they look attractive; they must serve a user need or an agreed business objective.

## 4. Responsive design rules

Do not design a separate website for every phone, tablet, or monitor. Define a small set of layout behaviors and test at representative widths. Breakpoints should be chosen when the content or layout needs to change, not only to match specific device names.

At minimum, test around these representative viewport widths:
- Small mobile: 320–375 CSS px
- Typical mobile: 390–430 CSS px
- Tablet: 768–1024 CSS px
- Desktop: 1280 CSS px and above

These are test points, not mandatory breakpoints. Also test intermediate widths and browser zoom.

Rules:
- Use fluid containers, responsive grids, and flexible media.
- Use CSS Grid/Flexbox and responsive typography where appropriate.
- Avoid fixed widths that cause horizontal scrolling.
- Let multi-column content stack when columns become too narrow.
- Keep primary actions visible and easy to tap.
- Make navigation usable with keyboard, touch, and assistive technology.
- Ensure images crop intentionally at different aspect ratios; use suitable focal points.
- Check long headings, doctor names, translations, form errors, and other content that can expand.
- Do not hide essential content or functionality on mobile simply to simplify the layout.

## 5. Interaction and form states

Every interactive component should specify and test:

- Default, hover, focus, active, disabled, loading, success, and error states as applicable.
- Keyboard behavior and visible focus indicators.
- Clear labels, required-field instructions, validation, and actionable error messages.
- What happens after successful submission and who/what receives the data.
- Spam protection and failure handling for forms.
- Touch target size and spacing appropriate for mobile use.

For appointment, careers, and contact forms, design the complete submission journey—not just the visible form. Confirm backend processing, storage, notifications, access control, and privacy requirements before representing a form as production-ready.

## 6. Content and imagery

- Obtain client approval for medical claims, doctor credentials, specialties, services, operating hours, contact details, testimonials, and policies.
- Do not invent doctors, qualifications, outcomes, reviews, or hospital facilities.
- Record image source, usage permission, intended placement, and alt text where meaningful.
- Use optimized formats and appropriately sized images; reserve layout space to reduce layout shifts.
- Use empty alt text for purely decorative images and descriptive alt text for meaningful content.
- Provide text alternatives for important information that would otherwise exist only inside an image.
- Keep stock imagery honest and avoid implying a pictured person is a real hospital clinician or patient when that is not true.

## 7. Accessibility and usability

Target WCAG 2.2 AA as the design and testing goal where applicable. At minimum:

- Maintain sufficient text and UI contrast.
- Use semantic heading hierarchy and landmarks.
- Support keyboard navigation and visible focus.
- Provide accessible names and labels for controls.
- Do not communicate status by color alone.
- Respect reduced-motion preferences and avoid disruptive animation.
- Ensure forms announce errors and status changes accessibly.
- Check zoom, reflow, readable type, and touch interaction.
- Never use color, animation, or visual styling as the only way to convey important medical or safety information.

## 8. Performance and implementation handoff

- Optimize images and avoid shipping unnecessarily large assets.
- Load only required fonts and weights.
- Avoid unnecessary animation libraries and client-side JavaScript.
- Prevent layout shifts by reserving image and media dimensions.
- Use semantic HTML and maintainable component styles.
- Document any third-party scripts, embeds, fonts, analytics, or form services.
- Check performance on representative mobile conditions, not only a fast desktop.
- Record any known trade-offs and client-approved exceptions.

## 9. Design approval workflow

1. Collect brand assets, content, requirements, and examples during discovery.
2. Create a client-specific design brief and identify the key patient journeys.
3. Present the agreed design deliverables or representative page previews.
4. Collect consolidated feedback from the authorized approver.
5. Record approvals, revision rounds, and out-of-scope requests.
6. Confirm responsive behavior and key interactions before full development.
7. Test the implemented site at representative widths and compare it with the approved design.
8. Obtain final client approval before production launch.

Do not treat an informal comment as approval if the project agreement requires written sign-off. New page types or substantial design changes after approval should follow the change-request process.

## 10. Required project-specific design record

For every hospital project, record:

- Client and project name, version, date, and approver.
- Target audiences and primary user journeys.
- Page inventory and goals for each page.
- Brand tokens, typography, component variants, and image rules.
- Desktop/tablet/mobile layout behavior.
- Navigation and interaction behavior.
- Form states and submission destinations (without secrets or personal data).
- Accessibility and performance requirements.
- Approved content/assets and their owners.
- Feedback, revision history, unresolved issues, and approval status.

## Approval status

This is a working draft for review by the agency owner. Update it as real projects reveal useful improvements. Once approved, use it as the baseline for project-specific design specifications.
