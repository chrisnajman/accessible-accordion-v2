export default function ariaExpandedDetails() {
  // Applies to all <details> elements
  document.querySelectorAll("details").forEach((detail) => {
    const summary = detail.querySelector("summary")

    // Initialize aria-expanded based on initial state
    summary.setAttribute("aria-expanded", detail.open ? "true" : "false")

    // Set aria-expanded attribute for all details elements dynamically
    detail.addEventListener("toggle", () => {
      summary.setAttribute("aria-expanded", detail.open ? "true" : "false")
    })

    // Close the <details> element when Escape key is pressed while focus is inside it.
    // Accessibility: Returns focus to the <summary> after closing.
    detail.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (detail.open) {
          detail.removeAttribute("open")
          summary.setAttribute("aria-expanded", "false")
          summary.focus() // return focus to summary
        }
      }
    })
  })
}
