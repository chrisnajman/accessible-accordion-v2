# Accessible Accordion V2

Accessible accordions built with the `<details>` element.

> [!NOTE]
> To enable multiple accordions, add the `data-group` attribute, e.g. `data-group="accordion"`. When any `<details>` in a group opens, any others in the same group automatically close.

> [!NOTE]
> Hardcode `open` on any `<details>` element to have that accordion open on page load, i.e. `<details open>`.

> [!NOTE]
> Accordions can be nested.

## Features

- **Responsive-aware**: Transitions are only applied on viewports wider than 37.5rem (600px), avoiding layout issues caused by wrapped `summary` text on smaller screens.
- **Respects user preferences**: Honors `prefers-reduced-motion` to avoid animating for users who have motion reduction enabled.
- **Feature detection**: Uses `@supports` to apply styles only if the browser supports the experimental `interpolate-size` property.
- **Safe fallback**: Older browsers that don’t support modern syntax will ignore the transition block entirely, without affecting functionality.

### Other

- Loading animation,
- Responsive menu,
- theme switcher.

## CSS Transition

The CSS snippet enhances the accordions with a smooth height transition - but only when it's safe and supported. It uses modern CSS features with progressive enhancement in mind.

```CSS
/*
  Apply styles only when:
  - The screen width is greater than 37.5rem (600px). (Note: 'width' is modern range syntax.)
    - (Adjust the width to your own requirements.)
  - The user has not requested reduced motion
*/
@media (width > 37.5rem) and (prefers-reduced-motion: no-preference) {
  /*
    Check if the browser supports the experimental 'interpolate-size' property
    (some browsers may ignore this block if they don't support it)
  */
    @supports (interpolate-size: allow-keywords) {
    /*
      Enable the 'interpolate-size' feature globally.
      This is a proposed property allowing height/width interpolation on elements
      like <details>, which normally don't transition well.
    */
        :root {
            interpolate-size: allow-keywords;
        }

    /*
      Target all <details> elements.
      Apply a transition on the height property and set a fixed closed height.
    */
        details {
            transition: height 0.5s ease;
            height: 4rem; /* Set closed height */

      /*
        When the <details> element is open:
        - Allow it to grow in height
        - Use 'overflow: clip' to hide overflowing content while transitioning
        (Note: 'overflow: clip' avoids scrollbars)
      */
            &[open] {
                height: auto;
                overflow: clip;
            }
        }
    }
}


```

---

## Live Demo

[View on GitPage](https://chrisnajman.github.io/faqs)

---

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity.

### `ariaExpandedDetails()`

- `aria-expanded-details.js`: This function ensures accessibility by dynamically updating the `aria-expanded` attribute on `<details>` elements, improving screen reader support for users with older or less capable assistive technologies. It listens for the `toggle` event to reflect the open/closed state, providing clearer communication for browsers or screen readers that may not fully support the native `<details>` behavior.

### Other

- `loader.js`: See [Loader Git repository](https://github.com/chrisnajman/loader).
- `primary-navigation.js` and `hamburger-button.js`: See [Accessible Mobile Menu Git repository](https://github.com/chrisnajman/accessible-mobile-menu)
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
