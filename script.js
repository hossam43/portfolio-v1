"use strict";

const opacityOne = (...targetElements) => {
  targetElements.forEach((targetElm) => {
    targetElm.style.opacity = 1;
  });
  // targetElement.style.opacity = 1;
};

// Preloader
const page = document.getElementById("page-contet");
const preloader = document.getElementById("preloader");
const aside = document.getElementById("aside-element");
const preloaderContent = document.querySelector(".preloader-wrapper");
let counterPre = 0;
const counterElement = document.getElementById("preloader-counter");
// // !
document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading with a setTimeout
  // Hide the preloader and show the main content

  // STAGE ONE
  // Show the preloader initially without the text content
  preloader.style.display = "block";

  // STAGE TWO
  // Fade in the Preloader text content
  setTimeout(function () {
    preloaderContent.style.opacity = 1;
  }, 400); // Adjust the time as needed

  // STAGE THREE
  //! start the counter animation
  setTimeout(function () {
    // Simulate progress updates
    const progressInterval = setInterval(function () {
      if (counterPre < 1999) {
        updateCounter();
        counterPre++;
      } else {
        clearInterval(progressInterval);
      }
    }, 40); // Adjust the interval as needed
    function updateCounter() {
      // Check if the counter has reached the final value
      if (counterPre < 1999) {
        // Use a cubic easing function for a smooth start and slow finish
        const easedValue = customEasing(counterPre / 1999);
        const displayValue = Math.ceil(easedValue * 1999);
        counterElement.innerText = `23 / 09 / ${displayValue}`;
        console.log("display", displayValue);
        // Check if the displayValue has reached 1999
        if (displayValue >= 1999) {
          // STAGE FOUR
          // add bluer effect to the Preloader text content
          setTimeout(function () {
            ["preloader-counter", "preloader_bottom", "preloader_top"].forEach(
              (value) => {
                document.querySelector(`.${value}`).style.filter =
                  "blur(60rem)";
              }
            );
          }, 500);
          // STAGE FIVE
          // remove the preloader
          setTimeout(function () {
            preloader.style.transform = "translateY(-100%)";
            // preloader.style.display = "none";

            console.log("end");
          }, 1300);

          clearInterval(progressInterval); // Stop the interval
        }
      }
    }
    // Custom easing function for initial fast start and gradual slowdown
    function customEasing(t) {
      console.log(t);
      console.log(counterPre);
      // Stop evaluating when t reaches or exceeds 1
      if (t >= 0.1) {
        return 1;
      }
      return 1 - Math.pow(1 - t, 300);
    }

    // preloader.style.display = "none";

    // show aside, page
    // preloader.style.display = "none";
  }, 1500); // Adjust the time as needed

  setTimeout(() => {
    // STAGE Six
    // display the page content
    opacityOne(aside, page);
  }, 2400);

  // Update the counter during the loading process
});
opacityOne(aside, page);
// !

// Desktop and Mobile navigation

// work with navigation
const asideIcon = document.querySelector(".aside-icon");
const navDesktopBtn = document.querySelector(".nav-btn");
const navHeader = document.querySelector(".nav-header");
// create the root element and the mobile nav
const menuButtonMob = document.getElementById("menu-button");
const rootElement = document.documentElement;

asideIcon.addEventListener("click", () => {
  rootElement.classList.add("is-open");
  navHeader.style.transform = "translateX(0)";
});

navDesktopBtn.addEventListener("click", () => {
  rootElement.classList.remove("is-open");
  navHeader.style.transform = "translateX(-100%)";
});

// Mobile navbtn
menuButtonMob.addEventListener("click", () => {
  rootElement.toggleAttribute("menu-open");
  if (rootElement.classList.contains("is-open")) {
    rootElement.classList.remove("is-open");
    navHeader.style.transform = "translateX(-100%)";
  } else {
    rootElement.classList.add("is-open");
    navHeader.style.transform = "translateX(0)";
  }
});

// *****************
// Smooth scrolling
// *****************
const parentClass = document.querySelector(".nav-menu");
parentClass.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  // Matching
  if (!e.target.classList.contains("nav-link")) return;
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  rootElement.classList.remove("is-open");
  navHeader.style.transform = "translateX(-100%)";
});

// OnScroll effect
// The airplan animation
document.addEventListener("DOMContentLoaded", function () {
  const airplan = document.querySelector(".airplan");

  window.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;
    const translateXValue = scrollValue * -0.5; // Adjust the scroll speed
    airplan.style.transform = `translateX(${translateXValue}px)`;
  });
});

const isMobileIMG = window.innerWidth <= 500;

const PROJECTS = [
  // Project 1
  [
    [
      `/assets/images/${
        isMobileIMG ? "website-mobile-ui-1.webp" : "website-ui-1.webp"
      }`,
      "/assets/images/website-mock-1.webp",

      `/assets/images/${isMobileIMG ? "w-m-color1.webp" : "w-color1.webp"}`,
    ],

    ["ASL-Academy"],
    ["Mobile App", "React Native", "iOS", "Android"],
    [
      "Design website UI/UX and add animated preloader.",
      "Optimize images for web use and ensure fast loading times.",
      "Code frontend using HTML, CSS, and JavaScript.",
      "Ensure cross-device compatibility with responsive design.",
      "Deploy website to a hosting server.",
      "Register a domain name relevant to the website's purpose.",
      "Optimize website for search engine visibility (SEO).",
    ],
    ["logo-html5", "logo-css3", "logo-javascript", "logo-figma", "logo-github"],
    {
      site: "https://aslacademy.online",
      github: "https://github.com/hossam43/Asl-academy.git",
    },
  ],
  // Project 2
  [
    [
      `/assets/images/${
        isMobileIMG ? "website-mobile-ui-2.webp" : "website-ui-2.webp"
      }`,
      "/assets/images/website-mock-2.webp",

      `/assets/images/${isMobileIMG ? "w-m-color2.webp" : "w-color2.webp"}`,
    ],

    ["Crybtobrecison"],
    ["HTML/Css", "Adobe Photoshop", "Figma", "UI/UX"],
    [
      "Created visually appealing landing page",
      "Code frontend using HTML, CSS, and JavaScript.",
      "Ensure cross-device compatibility with responsive design.",
      "Deploy website to a hosting server.",
    ],
    ["logo-html5", "logo-css3", "logo-figma", "logo-github"],
    {
      site: "https://hossam43.github.io/crybtobrecison-project/",
      github: "https://github.com/example3",
    },
  ],
  // Project 3
  [
    [
      `/assets/images/${
        isMobileIMG ? "website-mobile-ui-5.webp" : "website-ui-5.webp"
      }`,
      "/assets/images/website-mock-5.webp",
      `/assets/images/${isMobileIMG ? "w-m-color5.webp" : "w-color5.webp"}`,
    ],
    ["Omnifood"],
    ["Html/Css", "Responsiveness", "SEO", "Image Optimization"],
    [
      "Develop and deploy a sophisticated landing page website",
      "Design the UI/UX for the website.",
      "Create quality mockups and prototypes.",
      "Create a brand guide style sheet for easy customization",
      "Image Optimization using Adobe Photoshop and Squoosh",
    ],
    ["logo-html5", "logo-css3", "logo-javascript", "logo-figma", "logo-github"],
    {
      site: "https://hossam43.github.io/Omnifood-Project/",
      github: "https://github.com/hossam43/Omnifood-Project",
    },
  ],

  // Project 4
  [
    [
      `/assets/images/${
        isMobileIMG ? "website-mobile-ui-4.webp" : "website-ui-4.webp"
      }`,
      "/assets/images/website-mock-4.webp",
      `/assets/images/${isMobileIMG ? "w-m-color4.webp" : "w-color4.webp"}`,
    ],

    ["Red Builder"],
    ["Html/Css", "Javascript", "Responsiveness", "Image Optimization"],
    [
      "Develop and deploy a real estate landing page website",
      "Design the UI/UX for the website.",
      "Create a brand guide style sheet for easy customization",
      "Image Optimization using Adobe Photoshop and Squoosh",
    ],
    ["logo-html5", "logo-css3", "logo-javascript", "logo-figma", "logo-github"],

    { site: "https://example4.com", github: "https://github.com/example4" },
  ],

  // Project 5
  [
    [
      "/assets/images/website-ui-6.webp",
      "/assets/images/website-ui-6.webp",
      "/assets/images/website-ui-6.webp",
    ],
    ["FitFlex Gym"],
    ["Web Development", "HTML/Css", "JavaScript", "UI/UX", "Responsive Design"],
    [
      "Implement responsive design using HTML, CSS, and JavaScript.",
      "Optimize images and graphics for fast loading times.",
      "Incorporate user-friendly navigation elements for easy exploration.",
    ],
    ["logo-html5", "logo-css3", "logo-javascript", "logo-figma", "logo-github"],

    { site: "https://example1.com", github: "https://github.com/example1" },
  ],

  // Project 6
  [
    [
      "/assets/images/website-mock-3.webp",
      "/assets/images/website-mock-3.webp",
      "/assets/images/website-mock-3.webp",
    ],
    ["Medicine Market"],
    ["Web Development", "HTML/Css", "JavaScript", "UI/UX", "Responsive Design"],
    [
      "Implemented responsive UI",
      "Integrated payment gateway",
      "Created visually appealing layout",
      "Implementing user authentication",
    ],
    ["logo-html5", "logo-css3", "logo-javascript", "logo-figma", "logo-github"],

    { site: "https://example1.com", github: "https://github.com/example1" },
  ],
];
//! create a staragey for each header in a p tag and append it individually

// Container element in HTML to append project elements
const projectContainer = document.getElementById("projectContainer");

// Loop through each project
PROJECTS.forEach((project, projectIndex) => {
  const projectItemList = document.createElement("div");
  projectItemList.classList.add(
    "works-collection-item",
    "w-dyn-item",
    "container"
  );

  // Create a project element header (a like with title and a tag ) for each project
  const projectElemenHeader = document.createElement("a");
  projectElemenHeader.classList.add("work-collection-link");
  // Create a project element (Warrpe Slides and Text content Projects) for each project
  const openState = projectIndex === 0 ? "opened" : "closed";
  const projectElementBox = document.createElement("div");

  projectElementBox.classList.add(
    "grid",
    "grid--2--cols",
    "small-col-gap",
    "padding-zero",
    "project-warrper",
    openState
  );

  // Create a project element Slider for each project
  const projectElementSlider = document.createElement("div");
  projectElementSlider.classList.add("slider");

  // Loop through images and create slides HTML elements
  const projectElementSlides = document.createElement("div");
  projectElementSlides.classList.add("slides");
  projectElementSlider.appendChild(projectElementSlides);
  // ! Maby loop with a condation on PROJECT ARRAY
  const sliderControloer = `
  ${project[0]
    .map(
      (imageSrc, imageIndex) =>
        `<img src="${imageSrc}" class="imageSlider${projectIndex + 1} ${
          imageIndex === 0 ? "active" : ""
        }" alt="" />`
    )
    .join("")}`;
  projectElementSlides.innerHTML += sliderControloer;
  // Add the Next and Prev buttons
  const sliderBtn = `
  <div class="button">
    <span class="next${projectIndex + 1}">&#10095;</span>
    <span class="prev${projectIndex + 1}">&#10094;</span>
  </div>`;
  projectElementSlides.innerHTML += sliderBtn;

  // Create a project element (Text content) for each project
  const projectElementText = document.createElement("div");
  projectElementText.classList.add("project-text-content");

  // Loop through titles and create tag elements

  const titlesElement = document.createElement("div");
  titlesElement.classList.add("titles");

  project[1].forEach((title) => {
    const titleElement = document.createElement("p");
    titleElement.classList.add("title");
    titleElement.textContent = title;
    titlesElement.appendChild(titleElement);
    // Element for the header element a
    const titleElementHeader = document.createElement("h2");
    titleElementHeader.classList.add("works-list-title");
    titleElementHeader.textContent = title;
    projectElemenHeader.appendChild(titleElementHeader);

    const ionIconElement = document.createElement("ion-icon");
    ionIconElement.setAttribute("name", "chevron-down-sharp");

    projectElemenHeader.appendChild(ionIconElement);
  });
  projectElementText.appendChild(titlesElement); //! it is just one title (s) to keep it consistent

  // Loop through tags and create tag elements
  const tagsElement = document.createElement("div");
  tagsElement.classList.add("tags");
  const tagsBgColor = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"];
  project[2].forEach((tag, colorIndex) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.style.backgroundColor = tagsBgColor[colorIndex];
    tagElement.textContent = tag;
    tagsElement.appendChild(tagElement);
  });
  projectElementText.appendChild(tagsElement);

  // Loop through deliverables and create deliverables elements
  const deliverablesBox = document.createElement("div");
  deliverablesBox.classList.add("deliverables-box");
  const deliverablesTitleStatic = document.createElement("p");
  deliverablesTitleStatic.classList.add("projects-titles");
  deliverablesTitleStatic.textContent = "Deliverables:";
  const deliverablesElement = document.createElement("ul");
  deliverablesElement.classList.add("deliverables", "list");
  project[3].forEach((deliverable) => {
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
  projectElementText.appendChild(deliverablesBox);

  // Loop through skills and create skills elements
  const skillsBox = document.createElement("div");
  skillsBox.classList.add("skills-box");
  const skillsTitleStatic = document.createElement("p");
  skillsTitleStatic.classList.add("projects-titles");
  skillsTitleStatic.textContent = "Used Techs:";
  const skillsElement = document.createElement("ul");
  skillsElement.classList.add("skills");
  project[4].forEach((skill) => {
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
  projectElementText.appendChild(skillsBox);

  // Create links elements
  const linksElement = document.createElement("div");
  linksElement.classList.add("links");
  const elementBtnSite = document.createElement("button");
  elementBtnSite.classList.add("btn", "project-btn-box", "cursor");
  const siteLinkElement = document.createElement("a");
  siteLinkElement.classList.add("link", "demo-link");
  siteLinkElement.href = project[5].site;
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
  githubLinkElement.href = project[5].github;
  githubLinkElement.textContent = "Show Code";

  elementBtnGit.appendChild(githubLinkElement);
  elementBtnGit.appendChild(githubElmIcon);
  linksElement.appendChild(elementBtnGit);

  projectElementText.appendChild(linksElement);

  // Append the project text element to the project box element
  projectElementBox.appendChild(projectElementText);

  // Append the project slide element to the project box element
  projectElementBox.appendChild(projectElementSlider);

  // Append the project header element to the project item list
  projectItemList.appendChild(projectElemenHeader);
  // Append the project box element to the project item list
  projectItemList.appendChild(projectElementBox);

  // Append the project element to the container
  projectContainer.appendChild(projectItemList);
});

// The slider active
// Access the Images

// let slideImages = document.querySelectorAll("img");
let slideImagesOne = document.querySelectorAll(".imageSlider1");
let slideImagesTwo = document.querySelectorAll(".imageSlider2");
let slideImagesThree = document.querySelectorAll(".imageSlider3");
let slideImagesFour = document.querySelectorAll(".imageSlider4");
console.log(slideImagesOne, slideImagesTwo, slideImagesThree, slideImagesFour);
let deleteInterval; // Corrected the variable name
let counter = 0;

// Access the next and prev buttons
let next1 = document.querySelector(".next1");
let next2 = document.querySelector(".next2");
let next3 = document.querySelector(".next3");
let next4 = document.querySelector(".next4");
// prev btns
let prev1 = document.querySelector(".prev1");
let prev2 = document.querySelector(".prev2");
let prev3 = document.querySelector(".prev3");
let prev4 = document.querySelector(".prev4");
// Access the indicators
// let dots = document.querySelectorAll(".dot");

next1.addEventListener("click", slideNext1);
next2.addEventListener("click", slideNext2);
next3.addEventListener("click", slideNext3);
next4.addEventListener("click", slideNext4);

function slideNext1() {
  slideImagesOne[counter].style.animation = "nextA 0.5s ease-in forwards";
  if (counter >= slideImagesOne.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImagesOne[counter].style.animation = "prevA 0.5s ease-in forwards";
  //   indicators();
}

function slideNext2() {
  slideImagesTwo[counter].style.animation = "nextA 0.5s ease-in forwards";
  if (counter >= slideImagesTwo.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImagesTwo[counter].style.animation = "prevA 0.5s ease-in forwards";
  //   indicators();
}

function slideNext3() {
  slideImagesThree[counter].style.animation = "nextA 0.5s ease-in forwards";
  if (counter >= slideImagesThree.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImagesThree[counter].style.animation = "prevA 0.5s ease-in forwards";
  //   indicators();
}

function slideNext4() {
  slideImagesFour[counter].style.animation = "nextA 0.5s ease-in forwards";
  if (counter >= slideImagesFour.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImagesFour[counter].style.animation = "prevA 0.5s ease-in forwards";
  //   indicators();
}

// Code for prev button
prev1.addEventListener("click", slidePrev1);
prev2.addEventListener("click", slidePrev2);
prev3.addEventListener("click", slidePrev3);
prev4.addEventListener("click", slidePrev4);

function slidePrev1() {
  slideImagesOne[counter].style.animation = "nextB 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImagesOne.length - 1;
  } else {
    counter--;
  }
  slideImagesOne[counter].style.animation = "prevB 0.5s ease-in forwards";
  //   indicators();
}

function slidePrev2() {
  slideImagesTwo[counter].style.animation = "nextB 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImagesTwo.length - 1;
  } else {
    counter--;
  }
  slideImagesTwo[counter].style.animation = "prevB 0.5s ease-in forwards";
  //   indicators();
}

function slidePrev3() {
  slideImagesThree[counter].style.animation = "nextB 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImagesThree.length - 1;
  } else {
    counter--;
  }
  slideImagesThree[counter].style.animation = "prevB 0.5s ease-in forwards";
  //   indicators();
}

function slidePrev4() {
  slideImagesFour[counter].style.animation = "nextB 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImagesFour.length - 1;
  } else {
    counter--;
  }
  slideImagesFour[counter].style.animation = "prevB 0.5s ease-in forwards";
  //   indicators();
}

// Auto slideing
// function autoSliding() {
//   deleteInterval = setInterval(timer, 3000);
//   function timer() {
//     slideNext();
//     // indicators();
//   }
// }
// autoSliding();

// // // Stop auto sliding when mouse is over
// const containers = document.querySelectorAll(".slider");

// containers.forEach((sliderContainer) => {
//   sliderContainer.addEventListener("mouseover", function () {
//     clearInterval(deleteInterval);
//   });

//   sliderContainer.addEventListener("mouseout", autoSliding);
// });

// // Resume sliding when mouse is out

const ProjectsLink = document.querySelectorAll(".work-collection-link");
const projectsWarp = document.querySelectorAll(".project-warrper");

ProjectsLink.forEach((projectItem, projectIndex) => {
  projectItem.addEventListener("click", () => {
    // Remove the "opened" class from all projects
    projectsWarp.forEach((project, index) => {
      project.classList.remove("opened");

      // Add the "opened" class for the clicked project
      if (projectIndex === index) {
        project.classList.add("opened");
      }
    });
  });
});

// slider project
let sliderCounter = 1;

// setInterval(() => {
//   document.getElementById("radio" + sliderCounter).checked = true;
//   sliderCounter++;

//   if (sliderCounter > 3) sliderCounter = 1;
// }, 5000);

// ! move the icons using javascript

const footerMobileSocial = document.querySelector(".mob-social-container");
let isMobile = false;

function showFooterIcons() {
  const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  isMobile = clientWidth <= 776;

  const footerSocial = `<div class="footer-socials-box">
<a href="https://www.linkedin.com/in/hossam-ayman-">
  <ion-icon name="logo-linkedin" class="aside-socail-icon cursor md hydrated" role="img"></ion-icon>
</a>
<a href="mailto:hossamayman2399@gmail.com">
  <ion-icon name="mail-outline" class="aside-socail-icon cursor md hydrated" role="img"></ion-icon>
</a>
<a href="https://wa.me/1015882767">
  <ion-icon name="logo-whatsapp" class="aside-socail-icon cursor md hydrated" role="img"></ion-icon>
</a>
</div>`;

  if (isMobile) {
    footerMobileSocial.innerHTML = footerSocial;
    mouseCursor.classList.remove("custom-cursor");
    isMobile = false;
  } else {
    footerMobileSocial.innerHTML = "";
  }
}

// Call the function on page load and on window resize
window.addEventListener("load", showFooterIcons);
window.addEventListener("resize", showFooterIcons);

// ***************************
// Mouse following using the Web Animations API
// ***************************
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

// shrink the cursor on links
const cursorLink = document.querySelectorAll(".cursor");
cursorLink.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursorShrink");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursorShrink");
  });
});

// **********************
// Reveling contetn-section
// **********************
const allSectionsContent = document.querySelectorAll(".content-section");
const revelContent = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("content-hidden");
  // unobseriing
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revelContent, {
  root: null,
  threshold: 0.15,
});
// observe the two sections
allSectionsContent.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("content-hidden");
});

// ********************
// Marquee effect scroller
// ********************
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

// *****************
// TypeWriter Effect
// *****************
const words = ["Javascript", "React.js", "Three.js", "GIS."];

// main timeline
let mainTimeLine = gsap.timeline({
  repeat: -1,
});
// For each word create a new timeline use the Text plugin, then append that to the thimeline to the main one

words.forEach((word) => {
  let textTimeline = gsap.timeline({
    repeat: 1,
    yoyo: true,
    repeatDelay: 4,
  });

  textTimeline.to("#typewriter", {
    text: word,
    duration: 1,
    onUpdate: () => {
      cursorTimeline.restart();
      cursorTimeline.pause();
    },
    onComplete: () => {
      cursorTimeline.play();
    },
  });
  mainTimeLine.add(textTimeline);
});

// Blinking Cursor
let cursorTimeline = gsap.timeline({
  repeat: -1,
  repeatDelay: 0.8,
});

cursorTimeline
  .to("#typewriter-cursor", {
    opacity: 1,
    duration: 0,
  })
  .to("#typewriter-cursor", {
    opacity: 0,
    duration: 0,
    delay: 0.8,
  });

// The FadeOn Hover effect
const listOfWorks = document.querySelector(".works-collection-list");

const handleProjectHover = function (e, opacity) {
  const targetLink = e.target.closest(".work-collection-link");
  if (targetLink) {
    const link = targetLink;
    const siblings = link
      .closest(".works-collection-list")
      .querySelectorAll(".work-collection-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
  }
};

// passing argument and e
listOfWorks.addEventListener("mouseover", (e) => {
  handleProjectHover(e, 0.5);
});

listOfWorks.addEventListener(
  "mouseout",

  (e) => {
    handleProjectHover(e, 1);
  }
);

// about

const aboutBtn = document.querySelector(".about-btn");
aboutBtn.addEventListener("click", () => {
  window.location.href = "about.html";
});
