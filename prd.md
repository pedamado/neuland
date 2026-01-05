### 2. PRD.md (Product Requirements Document)
This document outlines the logic, purpose, and technical specifications of the app. It is useful for future development or maintaining the project scope.

```markdown
# Product Requirements Document (PRD)
**Project Name:** Random Neuland Symbol
**Version:** 1.0
**Status:** MVP (Minimum Viable Product)

## 1. Executive Summary
The "Random Neuland Symbol" app is a digital tool designed to replace analog flashcards for calligraphy practice. By automating the randomization of symbols and their orientation, it allows the user to focus entirely on the manual execution of strokes using broad-nib pens, brushes, or other marking tools.

## 2. Target Audience
* **Calligraphers:** Specifically those practicing Neuland, primitive strokes, or structural letterforms.
* **Design Students:** Users learning the fundamentals of geometric construction.
* **Visual Artists:** Anyone requiring abstract, geometric visual prompts.

## 3. Functional Requirements

### 3.1 Symbol Display
* **Canvas:** The app must display a single symbol centrally on the screen.
* **SVG Rendering:** Symbols must be rendered as SVG paths to ensure they are crisp at any viewport size (mobile phone vs. iPad Pro).
* **Styling:** Symbols must be rendered with a white stroke and no fill against a black background.

### 3.2 Randomization Logic
* **Selection:** On trigger, the app must select one symbol from the *active* pool of allowed symbols.
* **Rotation:** The selected symbol must be applied with a random rotation value.
    * *Constraint:* Rotations must be in 90-degree increments (0, 90, 180, 270) to maintain orthogonal alignment relevant to calligraphy.

### 3.3 User Controls
* **Trigger:** A large, easily accessible button ("New Random Symbol") to generate the next state.
* **Settings Access:** A distinct button to open the configuration menu.

### 3.4 Configuration (Settings)
* **Filtering:** Users must be able to enable/disable specific symbols from the randomization pool.
* **Batch Actions:** "Select All" and "Select None" buttons for quick configuration.
* **Persistence:** User preferences must be saved to the browser's `localStorage` so they persist across sessions.

### 3.5 Symbol Library
The initial release includes the following primitives:
1.  Circle
2.  Triangle
3.  Square
4.  Vertical Line
5.  Horizontal Line
6.  Corner
7.  Crossing (Orthogonal)
8.  Crossing (Diagonal)
9.  Left Diagonal
10. Lozenge
11. T-Shape

## 4. Non-Functional Requirements

### 4.1 UI/UX
* **Theme:** Strict Dark Mode (Black background `#000000`, White elements) to reduce eye strain and maximize contrast.
* **Responsiveness:** The app must fit 100% of the viewport height (`100dvh`) without scrolling on the main screen.
* **Feedback:** UI buttons should have active states (visual feedback on tap).

### 4.2 Technical
* **Platform:** Web-based (HTML/CSS/JS).
* **PWA:** The app must meet PWA criteria (manifest, service worker registration) to allow installation on mobile devices.
* **Performance:** Zero external API dependencies; all logic runs client-side.

## 5. Future Roadmap (v2.0 Ideas)
* **Timer Mode:** Auto-generate a new symbol every $X$ seconds for speed drills.
* **Stroke Width Control:** Allow user to adjust the `stroke-width` of the displayed symbol.
* **History:** Show the previously generated sequence.
