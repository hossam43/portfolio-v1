"use strict";
const opacityOne = (...targetElements) => {
  targetElements.forEach((targetElm) => {
    targetElm.style.opacity = 1;
  });
  // targetElement.style.opacity = 1;
};

// Custom cursor
let mouseCursor = document.querySelector(".custom-cursor");

window.addEventListener("mousemove", customCursor);

function customCursor(e) {
  const posX = e.pageX;
  const posY = e.pageY;

  mouseCursor.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    {
      duration: 1200,
      fill: "forwards",
    }
  );
}

const cursorLink = document.querySelectorAll(".cursor");

cursorLink.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursorGrow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursorGrow");
  });
});

// scroller
const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      // screen reader
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// slider project
let counter = 1;

setInterval(() => {
  document.getElementById("radio" + counter).checked = true;

  counter++;

  if (counter > 3) counter = 1;
}, 5000);

// Preloader
const page = document.getElementById("page-contet");
const preloader = document.getElementById("preloader");
const aside = document.getElementById("aside-element");
const preloaderContent = document.querySelector(".preloader-wrapper");
let counterPre = 0;
const counterElement = document.getElementById("preloader-counter");
// // !
// document.addEventListener("DOMContentLoaded", function () {
//   // Simulate loading with a setTimeout
//   // Hide the preloader and show the main content

//   // STAGE ONE
//   // Show the preloader initially without the text content
//   preloader.style.display = "block";

//   // STAGE TWO
//   // Fade in the Preloader text content
//   setTimeout(function () {
//     preloaderContent.style.opacity = 1;
//   }, 500); // Adjust the time as needed

//   // STAGE THREE
//   //! start the counter animation
//   setTimeout(function () {
//     // Simulate progress updates
//     const progressInterval = setInterval(function () {
//       if (counterPre < 1999) {
//         updateCounter();
//         counterPre++;
//       } else {
//         clearInterval(progressInterval);
//       }
//     }, 30); // Adjust the interval as needed
//     function updateCounter() {
//       // Check if the counter has reached the final value
//       if (counterPre < 1999) {
//         // Use a cubic easing function for a smooth start and slow finish
//         const easedValue = customEasing(counterPre / 1999);
//         const displayValue = Math.ceil(easedValue * 1999);
//         counterElement.innerText = `23 / 09 / ${displayValue}`;
//         console.log("display", displayValue);
//         // Check if the displayValue has reached 1999
//         if (displayValue >= 1999) {
//           // STAGE FOUR
//           // add bluer effect to the Preloader text content
//           setTimeout(function () {
//             ["preloader-counter", "preloader_bottom", "preloader_top"].forEach(
//               (value) => {
//                 document.querySelector(`.${value}`).style.filter =
//                   "blur(60rem)";
//               }
//             );
//           }, 500);
//           // STAGE FIVE
//           // remove the preloader
//           setTimeout(function () {
//             preloader.style.transform = "translateY(-100%)";
//             // preloader.style.display = "none";

//             console.log("end");
//           }, 2000);

//           clearInterval(progressInterval); // Stop the interval
//         }
//       }
//     }
//     // Custom easing function for initial fast start and gradual slowdown
//     function customEasing(t) {
//       console.log(t);
//       console.log(counterPre);
//       // Stop evaluating when t reaches or exceeds 1
//       if (t >= 0.1) {
//         return 1;
//       }
//       return 1 - Math.pow(1 - t, 300);
//     }

//     // preloader.style.display = "none";

//     // show aside, page
//     // preloader.style.display = "none";
//   }, 1500); // Adjust the time as needed

//   setTimeout(() => {
//     // STAGE Six
//     // display the page content
//     opacityOne(aside, page);
//   }, 2400);

//   // Update the counter during the loading process
// });
opacityOne(aside, page);
// !

// const project2 = document.getElementById("project2");

// project2.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.getElementById("projectHover2").classList.toggle("project-reveal");
// });

// project2.addEventListener("mouseleave", () =>
//   document.getElementById("projectHover2").classList.add("project-reveal")
// );

// work with navigation
const asideIcon = document.querySelector(".aside-icon");
const navHeader = document.querySelector(".nav-header");
const navBtn = document.querySelector(".nav-btn");

asideIcon.addEventListener("click", () => {
  navHeader.style.transform = "translateX(0)";
});

navBtn.addEventListener("click", () => {
  navHeader.style.transform = "translateX(-100%)";
});

// test

// const showBtn = document.querySelector("#start-about");
// showBtn.addEventListener("click", () => {
//   document
//     .querySelector(".about-container")
//     .classList.add("show-about-container");
// });

// showBtn.addEventListener("dblclick", () => {
//   document
//     .querySelector(".about-container")
//     .classList.remove("show-about-container");
// });

// OnScroll effect

//  using the scrollTrigger, the start and end values control when the animation begins and ends in relation to the scroll position, but they don't directly affect the timing of the animation.

// the 80% will happen faster than 20%
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
    end: "center 50%",
    scrub: true,
    markers: false,
  },
});

tl.to(".about-text-content", {
  y: 0,
  opacity: 1,
  zIndex: 1,
  visibility: "visible",
  ease: Power0.easeNone,
  duration: 0.3,
});

tl.to(".about-image-box", {
  y: 0,
  opacity: 1,
  zIndex: 1,
  visibility: "visible",
  ease: Power0.easeNone,
  duration: 0.5,
});

// The airplan animation

document.addEventListener("DOMContentLoaded", function () {
  const airplan = document.querySelector(".airplan");

  window.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;
    const translateXValue = scrollValue * -0.5; // Adjust the scroll speed
    airplan.style.transform = `translateX(${translateXValue}px)`;
  });
});

// The airplan about section

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "bottom-=300 80%",
    end: "bottom 50%",
    scrub: true,
    markers: true,
  },
});

tl3

  .fromTo(
    "#complete-airplan",
    { x: -460 },
    { x: 180, duration: 0.5, ease: "power3.out" }
  )
  .fromTo(
    ".wheels",
    { opacity: 0, y: -5 },
    { opacity: 0.5, y: 0, duration: 0.5, ease: "power3.out" },
    "<"
  );

// the project hover

const projectsList = document.querySelectorAll(".project-warrper");

projectsList.forEach((project) => {
  project.addEventListener("click", (e) => {
    e.preventDefault();
    // remove the opens classes from all projects
    projectsList.forEach((project) => project.classList.remove("opened"));
    // add the open class for the current project
    project.classList.add("opened");
  });
});

// Create the project dynamically

// const PROJECTS = [
//   // Tags for each project
//   [
//     ["Web Development", "React", "Responsive Design"],
//     ["E-commerce", "JavaScript", "Node.js", "Express"],
//     ["Portfolio", "HTML", "CSS", "Design"],
//     ["Mobile App", "React Native", "iOS", "Android"],
//   ],

//   // Deliverables for each project
//   [
//     ["Implemented responsive UI", "Integrated payment gateway"],
//     ["Developed server-side logic", "Designed user authentication"],
//     ["Created visually appealing layout", "Optimized for speed"],
//     ["Built cross-platform mobile app", "Integrated push notifications"],
//   ],

//   // Skills for each project
//   [
//     ["HTML", "CSS", "JavaScript", "React"],
//     ["JavaScript", "Node.js", "Express", "MongoDB"],
//     ["HTML", "CSS", "Design", "Photoshop"],
//     ["React Native", "iOS Development", "Android Development"],
//   ],

//   // Links for each project
//   [
//     { site: "https://example1.com", github: "https://github.com/example1" },
//     { site: "https://example2.com", github: "https://github.com/example2" },
//     { site: "https://example3.com", github: "https://github.com/example3" },
//     { site: "https://example4.com", github: "https://github.com/example4" },
//   ],
// ];

const PROJECTS = [
  // Project 1

  [
    ["project Title one"],
    ["Web Development", "React", "Responsive Design"],
    [
      "Implemented responsive UI",
      "Integrated payment gateway",
      "Created visually appealing layout",
    ],
    ["logo-github", "logo-react", "logo-instagram", "logo-react"],

    { site: "https://example1.com", github: "https://github.com/example1" },
  ],

  // Project 2

  [
    ["project Title two"],
    ["E-commerce", "JavaScript", "Node.js", "Express"],
    [
      "Developed server-side logic",
      "Designed user authentication",
      "Created visually appealing layout",
    ],
    ["logo-github", "logo-react", "logo-instagram", "logo-react"],
    { site: "https://example2.com", github: "https://github.com/example2" },
  ],

  // Project 3

  [
    ["project Title three"],
    ["Portfolio", "HTML", "CSS", "Design"],
    [
      "Created visually appealing layout",
      "Optimized for speed",
      "Created visually appealing layout",
    ],
    ["logo-github", "logo-react", "logo-instagram", "logo-react"],
    { site: "https://example3.com", github: "https://github.com/example3" },
  ],

  // Project 4

  [
    ["project Title four"],
    ["Mobile App", "React Native", "iOS", "Android"],
    [
      "Built cross-platform mobile app",
      "Integrated push notifications",
      "Created visually appealing layout",
    ],
    ["logo-github", "logo-react", "logo-instagram", "logo-react"],
    { site: "https://example4.com", github: "https://github.com/example4" },
  ],
];

// Container element in HTML to append project elements
const projectContainer = document.getElementById("projectContainer");

// Loop through each project
PROJECTS.forEach((project, index) => {
  const projectItemList = document.createElement("div");
  projectItemList.classList.add("works-collection-item", "w-dyn-item");

  // Create a project element for each project
  const projectElement = document.createElement("div");
  projectElement.classList.add("project", "project-text-content");
  // append the project element to the project item list
  projectItemList.appendChild(projectElement);

  // Loop through titles and create tag elements

  const titlesElement = document.createElement("div");
  titlesElement.classList.add("titles");
  project[0].forEach((title) => {
    const titleElement = document.createElement("p");
    titleElement.classList.add("title");
    titleElement.textContent = title;
    titlesElement.appendChild(titleElement);
  });
  projectElement.appendChild(titlesElement); //! it is just one title (s) to keep it consistent

  // Loop through tags and create tag elements
  const tagsElement = document.createElement("div");
  tagsElement.classList.add("tags");
  const tagsBgColor = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"];
  project[1].forEach((tag, colorIndex) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.style.backgroundColor = tagsBgColor[colorIndex];
    tagElement.textContent = tag;
    tagsElement.appendChild(tagElement);
  });
  projectElement.appendChild(tagsElement);

  // Loop through deliverables and create deliverables elements
  const deliverablesBox = document.createElement("div");
  const deliverablesTitleStatic = document.createElement("p");
  deliverablesTitleStatic.classList.add("projects-titles");
  deliverablesTitleStatic.textContent = "Deliverables:";
  const deliverablesElement = document.createElement("ul");
  deliverablesElement.classList.add("deliverables", "list");
  project[2].forEach((deliverable) => {
    const deliverableElement = document.createElement("li");
    deliverableElement.classList.add("deliverable", "list-item");
    const deliverableElmText = document.createElement("span");
    deliverableElmText.textContent = deliverable;
    const deliverableElmIcon = document.createElement("ion-icon");
    deliverableElmIcon.setAttribute("name", "checkmark-circle-outline");

    deliverableElement.appendChild(deliverableElmIcon);
    deliverableElement.appendChild(deliverableElmText);
    deliverablesElement.appendChild(deliverableElement);
  });

  deliverablesBox.appendChild(deliverablesTitleStatic);
  deliverablesBox.appendChild(deliverablesElement);
  projectElement.appendChild(deliverablesBox);

  // Loop through skills and create skills elements
  const skillsBox = document.createElement("div");
  const skillsTitleStatic = document.createElement("p");
  skillsTitleStatic.classList.add("projects-titles");
  skillsTitleStatic.textContent = "Skills:";
  const skillsElement = document.createElement("ul");
  skillsElement.classList.add("skills");
  project[3].forEach((skill) => {
    const skillElement = document.createElement("li");
    const skillElmSpan = document.createElement("span");
    const skillElmIcon = document.createElement("ion-icon");
    skillElmIcon.classList.add("skill-icon");
    skillElmIcon.setAttribute("name", skill);

    skillElmSpan.appendChild(skillElmIcon);
    skillElement.appendChild(skillElmSpan);
    skillsElement.appendChild(skillElement);
  });
  skillsBox.appendChild(skillsTitleStatic);
  skillsBox.appendChild(skillsElement);
  projectElement.appendChild(skillsBox);

  // Create links elements
  //  <ion-icon name="logo-github" class="code-icon md hydrated" role="img">…</ion-icon>
  const linksElement = document.createElement("div");
  linksElement.classList.add("links");
  const elementBtnSite = document.createElement("button");
  elementBtnSite.classList.add("btn", "project-btn-box", "cursor");
  const siteLinkElement = document.createElement("a");
  siteLinkElement.classList.add("link", "demo-link");
  siteLinkElement.href = project[4].site;
  siteLinkElement.textContent = "Visit Site";
  const htmlStructure = `
    <div class="digital-ball">
        <div class="overlay"></div>
        <div class="globe" style="transform: translate(-50%, -50%)">
            <div class="globe-wrap">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle-hor"></div>
                <div class="circle-hor-middle"></div>
            </div>
        </div>
    </div>
`;

  elementBtnSite.appendChild(siteLinkElement);
  elementBtnSite.insertAdjacentHTML("beforeend", htmlStructure);
  linksElement.appendChild(elementBtnSite);

  const elementBtnGit = document.createElement("button");
  elementBtnGit.classList.add("btn", "project-btn-box", "cursor");
  const githubElmIcon = document.createElement("ion-icon");
  githubElmIcon.classList.add("code-icon");
  githubElmIcon.setAttribute("name", "logo-github");
  const githubLinkElement = document.createElement("a");
  githubLinkElement.classList.add("link", "code-link");
  githubLinkElement.href = project[4].github;
  githubLinkElement.textContent = "Show Code";

  elementBtnGit.appendChild(githubLinkElement);
  elementBtnGit.appendChild(githubElmIcon);
  linksElement.appendChild(elementBtnGit);

  projectElement.appendChild(linksElement);

  // Append the project element to the project item list
  projectItemList.appendChild(projectElement);

  // Append the project element to the container
  projectContainer.appendChild(projectItemList);
});
