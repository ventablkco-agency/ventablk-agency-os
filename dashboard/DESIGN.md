# Ventablk Agency Dashboard — Design System

## Product context
A private, laptop-first operations dashboard for a small web design agency. It helps the owner understand client relationships, leads, projects, tasks, invoice status, and recurring maintenance at a glance. It is an operational tool, not a public marketing website.

## Visual direction
- Light theme by default: warm, quiet neutral surfaces with a restrained blue/ink accent and clear status colors.
- Professional, calm, information-dense but not cramped.
- Use clear hierarchy, consistent alignment, intentional whitespace, and crisp separators.
- Avoid decorative gradients, excessive rounded cards, nested cards, ornamental icons, and generic SaaS template patterns.
- Prioritize scan speed and meaningful labels over visual novelty.
- Use consistent typography, spacing, radii, shadows, and semantic color tokens; define tokens centrally rather than scattering values.

## Layout and navigation
- Optimize for laptop/desktop first; responsive behavior should remain usable on narrower screens, but phone-specific functionality is not in the current scope.
- Keep primary navigation predictable and page content aligned to a clear grid.
- Use compact summaries for counts and balances; provide clear routes to the underlying records.
- Long names, large amounts, empty data, and error states must not break layout.
- Do not make the dashboard depend on decorative motion or hover-only information.

## Interaction
- Every visible control must work and communicate its purpose.
- Include empty, loading, success, validation, and error states wherever relevant.
- Confirm destructive actions and provide actionable error messages.
- Forms must have persistent labels, sensible keyboard behavior, validation, and clear save/cancel paths.
- Show status as text as well as color. Use visible keyboard focus and semantic HTML.

## Accessibility and performance
- Aim for WCAG 2.2 AA where applicable.
- Preserve browser zoom and keyboard navigation.
- Respect `prefers-reduced-motion`.
- Avoid unnecessary client-side JavaScript and large assets.
- Prevent layout shifts and test with long content and realistic data density.

## Data integrity and privacy
- Display only records from the local application database.
- Never place real client data, credentials, or secrets in source code, sample fixtures, screenshots, or Git history.
- Make destructive data actions explicit and require confirmation.
- Do not imply that backup, security, or authentication controls exist unless implemented and verified.

## Review gate
Before calling a dashboard UI complete:
1. Check the intended laptop viewport and a narrower responsive viewport.
2. Review accessibility, labels, focus, contrast, empty/error states, and keyboard interaction.
3. Use Impeccable and Vercel guideline review skills when installed.
4. Use Playwright MCP for key flows when configured; record the actual test result.
5. Compare the final implementation with this file and the agency's approved decisions.
