# FAQS (in progress)

xxxxxxxxxxxxxxx

## Features

- Loading animation,
- responsive menu,
- theme switcher.

[View on GitPage](https://chrisnajman.github.io/faqs)

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity:

- `module-placeholder.js`: Empty module, imported into `index.js`.
- `primary-navigation.js`: See [Accessibile Mobile Menu Git repository](https://github.com/chrisnajman/accessible-mobile-menu)
- `loader.js`: See [Loader Git repository](https://github.com/chrisnajman/loader)
- `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

---

## Accessibility

The site is fully navigable using tab keys and up/down arrows.

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).
