# Ask Zio — AI Telematics & Fleet Chatbot

Interactive, ClickUp Brain-style AI Chatbot Widget designed for **Uffizio.com** and telematics fleet management software solutions.

---

## 🌟 Key Features

1. **Header Button ("Ask Zio")**:
   - Modern button with official brand gradient star icon.
   - Smooth perimeter specular spark circling around the icon.
   - Fully responsive on desktop and mobile.

2. **Right Sliding Sidebar Panel**:
   - Slides smoothly from the right side.
   - Reflows the page body (`padding-right: 500px`) so the underlying website remains 100% visible and responsive.

3. **Center Hero Screen**:
   - Rotating white star icon with dark-mode ambient music wave ripples.
   - Single-line auto-scrolling marquee of all 13 Uffizio products (Gridzee, Petzee, Rosterz, SmartTransit, Trakzee, Smartbus, etc.).
   - Pure stationary smooth hover and click feedback.

4. **Context Strip & Product Selection**:
   - Clicking any product logo above dynamically updates the input top strip with that product's colored icon, brand glow, and name.
   - Pre-fills suggested inquiry and focuses textarea.
   - Includes a one-click `✕` deselect button to clear context.

5. **New Chat Action Dropdown**:
   - **New Conversation**: Reset chat back to hero state.
   - **Share Summary**: Copies dialogue summary to clipboard.
   - **Download Transcript (.txt)**: Exports timestamped dialogue log as `.txt` file.

---

## 🚀 Live Demo & Deployment

This repository is ready to be hosted on **GitHub Pages**:
1. Go to repository **Settings** &rarr; **Pages**.
2. Under **Build and deployment**, select source: **Deploy from a branch**.
3. Choose branch: **main** / folder: `/(root)` and click **Save**.
4. The live site will be available at:
   `https://hineshvarma-uffizio.github.io/Ask-Uffizio-Chatbot/`

---

## 📁 Repository Structure

- `index.html`: Main interactive demo page showcasing the header button and AI chatbot widget.
- `uffizio-ai-chat.css`: Complete modern styling system for the chat drawer, animations, dropdowns, and input dock.
- `uffizio-ai-chat.js`: Core controller handling UI states, streaming simulation, product selection, voice input, and actions.
- `uffizio-knowledge.js`: Pre-trained domain knowledge base covering all Uffizio software products and 1,500+ GPS hardware devices.
- `demo.mp4`: Ambient background video asset.

---

© 2026 Uffizio. All rights reserved. • Telematics & IoT Software Solutions
