# Random Neuland Symbol Generator

A minimalist Progressive Web App (PWA) designed to assist calligraphers, designers, and artists in practicing tool writing and primitive shape construction.

The application generates a random sequence of geometric symbols (based on Neuland/primitive design vocabularies) with randomized rotations, providing endless prompts for practice without the need for prepared exercise sheets.

## 🌟 Features

* **Random Symbol Generation:** Instantly generates geometric primitives (Circle, Triangle, Square, Lines, Crossings, etc.).
* **Random Rotation:** Every symbol is randomly rotated (0°, 90°, 180°, 270°) to challenge the user's hand position and tool manipulation.
* **Customizable Set:** Users can toggle specific symbols on or off via a settings modal to focus on specific shapes.
* **Distraction-Free UI:** High-contrast "Dark Mode" interface (White on Black) optimized for focus.
* **PWA Ready:** Designed to be installed on mobile devices and tablets for offline use in the studio.
* **Local Storage:** Remembers your symbol preferences between sessions.

## 🚀 Usage

1.  **Open the App:** Launch `index.html` in your browser.
2.  **Generate:** Tap the big white button (or the screen area) to generate a new symbol.
3.  **Configure:** Click the "Settings" (gear/slider) icon to filter which symbols appear in the rotation.
4.  **Install:** On mobile devices, use "Add to Home Screen" to install it as an app.

## 🛠️ Tech Stack

* **HTML5 / CSS3:** Uses CSS Variables and Flexbox for layout.
* **JavaScript (ES6+):** Vanilla JS for logic, no heavy frameworks.
* **SVG:** All symbols are rendered as scalable vectors for perfect sharpness on any display.
* **Bootstrap 5:** Used for base styling and modal components.

## 📂 Project Structure

```text
├── index.html      # Main application structure
├── styles.css      # Custom styling and dark theme
├── script.js       # App logic (Randomizer, SVG rendering, State management)
├── manifest.json   # PWA Manifest (referenced)
└── icons/          # App icons (referenced)

```

## 🤝 Credits & Attribution

* **Concept:** Pedro Amado, FBAUP/i2ADS
* **Year:** 2025
* **Development:** Developed with the assistance of Claude 3.5 Sonnet (Anthropic).

## 📄 License

© 2025 Pedro Amado. All rights reserved.

