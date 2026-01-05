# Random Neuland Symbol PWA - Technical Specification

## Overview
Create a Progressive Web Application (PWA) that displays random geometric symbols with user customization options.

## Core Features
1. Full viewport design (100dvh)
2. Symbol display and randomization
3. Settings management
4. PWA installation capability

## Visual Design Requirements
- Black background (#000000)
- White symbols and outlines (#FFFFFF)
- Yellow button feedback on press
- Monospaced typography
- 20px margins consistently applied

## Symbol Library
The application should include the following symbols, each drawn with white lines at 20% width of their container:
1. Circle
2. Triangle
3. Square
4. Vertical line
5. 90-degree corner
6. Crossing orthogonal lines
7. Horizontal line
8. Crossing diagonal lines
9. Left downward diagonal line
10. Lozenge
11. T-shape

## Layout Specifications
1. Symbol Display Area:
   - Positioned in top third of viewport
   - Symbol visually centered within the top third area
   - 20px margins (top, left, right)
   - Symbols randomly rotated (0°, 90°, 180°, or 270°)
   - 200ms cross-fade animation on symbol change

2. Control Area:
   - Positioned at bottom of viewport
   - Two buttons spanning full width minus margins
   - 20px margins (bottom, left, right)
   - 20px spacing between buttons

### Button Specifications
1. "New Random Symbol" Button:
   - White background
   - Black text
   - Monospace font
   - Yellow visual feedback on press
   - Flex-grow to fill available space

2. Settings Button:
   - Square dimensions
   - White outline
   - Black background
   - White gear icon
   - Fixed width

## Settings Modal
1. Visual Properties:
   - Full screen with 20px margins
   - White background
   - Black text and UI elements

2. Components:
   - Title: "Select Symbols to Display"
   - Attribution Text:
     ```
     Concept by Pedro Amado, FBAUP/i2ADS, 2025
     Design and Development by Claude / Anthropic
     
     © 2025 Pedro Amado. All rights reserved.
     Created with Claude 3.5 Sonnet by Anthropic.
     ```
   - Action buttons:
     - "Select All" button
     - "Select None" button
   - Checklist of all available symbols
   - "Set Symbols" button (black with white text)

3. Functionality:
   - Modal appears when settings button is pressed
   - Checklist state persists between sessions
   - Symbol randomization limited to selected symbols
   - Modal closes on "Set Symbols" button press

## Technical Requirements
1. File Structure:
   - index.html
   - styles.css (using Bootstrap)
   - script.js
   - manifest.json
   - service-worker.js
   - Required icons for PWA installation

2. Dependencies:
   - Bootstrap CSS framework
   - PWA installation capabilities
   - Local storage for settings persistence

3. Responsive Design:
   - Full viewport height (100dvh)
   - Adjusts to all screen sizes
   - Mobile-first approach
   - Handles browser UI elements appropriately

## Performance Requirements
1. Smooth animations (200ms cross-fade)
2. Responsive interface with no lag
3. Works offline after installation
4. Maintains state between sessions

## Browser Support
- Modern browsers (last 2 versions)
- Mobile browsers with PWA support
- iOS Safari 14+
- Chrome 80+
