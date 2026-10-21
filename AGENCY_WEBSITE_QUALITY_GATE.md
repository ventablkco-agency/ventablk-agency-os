# Agency website quality gate

This is the mandatory pre-build and pre-release gate for Ventablk websites. Use with [the workflow integration](docs/AWWWARDS_SKILLS_INTEGRATION.md), the vendored `awwwards` build skill, the vendored `jury` critique skill, and `WEBSITE_TECHNICAL_STANDARD.md`.

## Gate A — Before design or code

- [ ] Read current project docs, approved requirements, brand system, reference library, and retained components.
- [ ] Define primary audience, user problem, business goal, conversion action, page inventory, content owner and success criteria.
- [ ] Inventory real content/assets and permissions; list assumptions and placeholders.
- [ ] Read `vendor/juliobsz-skills/awwwards/SKILL.md` and project-specific references.
- [ ] Write `DESIGN.md`: three distinct concept directions; selected concept with rationale; signature visual/moment; role-based palette; type roles/scale; layout grid/rhythm; composition wireframes; responsive and motion plans; content/asset list; genericness test.
- [ ] Confirm architecture and dependencies fit the current framework, cost, client access, performance and privacy needs. Do not default to adding GSAP/Lenis/WebGL/3D/physics.
- [ ] Get required design/content approval before a large build, unless the user explicitly requested direct implementation.

## Gate B — Before declaring design complete

- [ ] Review a static first frame: composition, hierarchy, negative space, typography, image/art direction, contrast and CTA are convincing without motion.
- [ ] Verify no layout collision, overflow, unwanted wrapping, unbalanced spacing or decorative clutter at 320/360/390/430/768/1024/1280/1440 px and relevant intermediate sizes.
- [ ] Use the actual approved logo assets, real project images/content where supplied and accurate copy. No fake metrics, fake awards, invented clients or fake testimonials.
- [ ] Motion has one intentional signature, coherent vocabulary and a reduced-motion alternative; it does not rescue a weak static layout.
- [ ] Check hover, focus, active, loading, success and error states as applicable.
- [ ] Check all retained header/nav/preloader/brand elements and verify the changes did not regress them.
- [ ] Compare implementation against `DESIGN.md` and approved reference frames; record deviations and why they were needed.

## Gate C — QA evidence

- [ ] Build and serve production output—not just a development server.
- [ ] Run upstream audit and screenshot tools where runtime/prerequisites permit.
- [ ] Inspect desktop hero, mid-page, footer, phone, reduced-motion and keyboard screenshots; check intermediate animation states and important hover pairs.
- [ ] Run automated accessibility (axe) and manually verify keyboard traversal, focus visibility, names/labels, headings/landmarks, contrast, zoom/reflow, screen-reader basics and reduced-motion content visibility.
- [ ] Measure throttled mobile LCP/CLS and scroll FPS where the tooling supports it. Record actual values, tool limitations and environment.
- [ ] Check SEO metadata, canonical host, indexability, robots, sitemap, 404 status, Open Graph/Twitter image, favicon, structured data and broken links.
- [ ] Check asset dimensions, font loading, bundle/page weight, failed requests, runtime exceptions, mobile overflow and hit target sizing.
- [ ] Check every form end-to-end including invalid, successful, failure/retry, duplicate submission and notification/destination when in scope.
- [ ] Run the independent jury skill on screenshots/report evidence. New critic each pass if subagent tooling is available; do not show the reviewer code or design pitch.
- [ ] Complete at least two build/screenshot/critic/fix passes. Preserve older scorecards to show improvement. Fix P0/P1 issues before proceeding.
- [ ] Save reports/screenshots in the client project's QA evidence folder and reference the reviewed commit.

## Gate D — Preview and release

- [ ] CI/build passes for the exact reviewed commit.
- [ ] Deploy to a non-production Cloudflare preview.
- [ ] Confirm the preview's deployed commit matches the reviewed commit.
- [ ] Open the actual preview in a browser/device and review it, rather than inferring visual success from a passing build.
- [ ] Provide the exact preview URL in the implementation response every time a correction is deployed; include commit short SHA, scope of change, QA completed and known limitations.
- [ ] Only claim tests actually run and evidence actually inspected.
- [ ] Never merge/deploy to production without explicit owner approval.
