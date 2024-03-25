let projects = [
  {
    name: "Omnifood",
    status: "Completed",
    services: "Design & Development",
    year: "2023",
    url: "https://master--hossam-ayman.netlify.app/",
  },

  {
    name: "Red Builder",
    status: "Completed",
    services: "Design & Development",
    year: "2023",
    url: "https://master--hossam-ayman.netlify.app/",
  },
];

// Function to create a new project object
const createProject = (name, status, services, year, url) => ({
  name,
  status,
  services,
  year,
  url,
});

// Function to add a new project to the list
const addProject = (projects, project) => [...projects, project];

// Function to display projects in the DOM
const displayProjects = (projects) => {
  const workItems = document.getElementById("work-items");
  workItems.innerHTML = "";

  projects.forEach((project) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", project.url);
    link.classList.add("row");

    const nameCol = document.createElement("div");
    nameCol.classList.add("flex-col");
    nameCol.innerHTML = `<h4><span>${project.name}</span></h4>`;
    link.appendChild(nameCol);

    const statusCol = document.createElement("div");
    statusCol.classList.add("flex-col");
    statusCol.innerHTML = `<p>${project.status}</p>`;
    link.appendChild(statusCol);

    const servicesCol = document.createElement("div");
    servicesCol.classList.add("flex-col");
    servicesCol.innerHTML = `<p>${project.services}</p>`;
    link.appendChild(servicesCol);

    const yearCol = document.createElement("div");
    yearCol.classList.add("flex-col");
    yearCol.innerHTML = `<p>${project.year}</p>`;
    link.appendChild(yearCol);

    item.appendChild(link);
    workItems.appendChild(item);
  });
};

// Filtering projects
const filterProjects = (projects, category) => {
  return projects.filter((project) => {
    // Check if the project services include the selected category
    if (category === "All") {
      return true;
    } else {
      return project.services.includes(category);
    }
  });
};

// Function to handle filter button click
const handleFilterClick = (event) => {
  // Check if the clicked element is a filter button
  if (event.target.classList.contains("btn-filter")) {
    const category = event.target.textContent.trim();

    // Remove active class from all filter buttons
    document.querySelectorAll(".btn-filter").forEach((btn) => {
      btn.classList.remove("btn-filter-active");
    });

    // Add active class to the clicked filter button
    event.target.classList.add("btn-filter-active");

    // Filter projects based on the selected category
    const filteredProjects = filterProjects(projects, category);

    // Display filtered projects
    displayProjects(filteredProjects);
  }
};

// Attach click event listener to the filter container
document
  .querySelector(".filter-container")
  .addEventListener("click", handleFilterClick);

// Example usage:

projects = addProject(
  projects,
  createProject(
    "Crybtobrecison",
    "Completed",
    "Development",
    "2023",
    "https://hossam43.github.io/crybtobrecison-project/"
  )
);

projects = addProject(
  projects,
  createProject(
    "Medicine Market",
    "Completed",
    "Design & Development",
    "2022",
    "https://hossam43.github.io/medicine-project/"
  )
);

projects = addProject(
  projects,
  createProject(
    "FitFlex Gym",
    "Completed",
    "Design & Development",
    "2023",
    "https://master--hossam-ayman.netlify.app/"
  )
);

console.log(projects);
displayProjects(projects);
