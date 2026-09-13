# Design QA

## Visual source of truth

- Approved concept: `/Users/jonathanarteaga/Documents/ChatGPT/Private Practice/output/design/practice-studio-homepage-hybrid.png`
- Source dimensions: 864 × 1821 px
- Design direction: Option 1's warm, clear structure and roadmap combined with Option 3's dark editorial hero, serif personality, and ochre accent.

## Implementation evidence

- Desktop viewport: 1440 × 1000 CSS px at 1× density
- Desktop full-page capture: `/Users/jonathanarteaga/Documents/ChatGPT/Private Practice/tmp/design-qa/implementation-desktop-v2.png` (1425 × 3233 px, excluding the browser scrollbar)
- Desktop full-view comparison: `/Users/jonathanarteaga/Documents/ChatGPT/Private Practice/tmp/design-qa/desktop-comparison-v2.png`
- Focused hero comparison: `/Users/jonathanarteaga/Documents/ChatGPT/Private Practice/tmp/design-qa/hero-comparison-v2.png`
- Mobile viewport: 390 × 844 CSS px
- Mobile initial state: `/Users/jonathanarteaga/Documents/ChatGPT/Private Practice/tmp/design-qa/implementation-mobile-top.png`
- Mobile navigation state: `/Users/jonathanarteaga/Documents/ChatGPT/Private Practice/tmp/design-qa/implementation-mobile-menu.png`
- Mobile roadmap form state: `/Users/jonathanarteaga/Documents/ChatGPT/Private Practice/tmp/design-qa/implementation-mobile-dialog.png`

The desktop implementation was normalized to the approved visual's 864 px width for the side-by-side comparison. Its normalized height is about 1960 px, which is close to the approved visual's 1821 px while allowing for the implemented footer, responsive text wrapping, and accessible control sizing.

## Comparison history

### Pass 1

- P1: The generated launch-path artwork showed a rectangular background against the navy hero. Rebuilt the asset with a transparent background.
- P1: The Blueprint notebook inherited its source height and made the section substantially too tall. Added global responsive image sizing so it retains its natural aspect ratio.
- P2: The hero headline wrapped to five lines on desktop. Adjusted the content width and typography so it matches the approved three-line composition.

### Pass 2

- Full-page structure, palette, type hierarchy, section order, roadmap motif, Blueprint offer, trust row, support row, closing CTA, and footer align with the approved direction.
- Focused hero comparison confirms the three-line headline, dark editorial treatment, ochre actions, and right-side launch path are preserved.
- Remaining differences are minor spacing and scale adjustments appropriate to a responsive implementation. No P0, P1, or P2 visual issues remain.

## Functional and responsive checks

- Primary roadmap CTAs open the modal.
- Required Name, Email, Primary state, and Planned launch timing fields accept input.
- Form submission reaches the local prototype success state.
- The form explicitly warns users not to enter patient or medical information.
- Escape closes the modal, focus remains inside while open, and focus returns to the triggering button on close.
- The mobile menu opens, exposes every navigation item, closes after navigation, and reports its expanded state.
- The 390 px viewport has no horizontal overflow.
- Desktop and mobile Browser console review found no warnings or errors; only normal Vite development and React DevTools informational messages were present.
- `npm run build` passed.
- `npm run test:sites` passed: 4 of 4 tests.
- `git diff --check` passed.

final result: passed
