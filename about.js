// ! 194 Building a Tabbed Component

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
// commen parent

tabsContainer.addEventListener("click", (e) => {
  // find the parent element with the class operations__tab of the clicked element.
  const clicked = e.target.closest(".operations__tab");
  // Guard clause
  if (!clicked) return;
  // Remove the Active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Active tab
  clicked.classList.add("operations__tab--active");
  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
