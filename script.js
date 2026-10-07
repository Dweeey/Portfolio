const projects = [
  {
    id: "eldercare-caregiver-mobile",
    title: "Elderly Health Monitoring — Caregiver Mobile App",
    category: "mobile",
    tag: "Caregiver app",
    brandName: "Elderly Health Monitoring",
    logo: "Documents/logo.png",
    metric: "Mobile + health tracking",
    github: "https://github.com/Dweeey/Eldercare",
    description:
      "Built the caregiver-facing mobile app for ElderCare, with live health monitoring support, alerts, and patient oversight workflows.",
    summary:
      "The caregiver mobile app was designed to help family members or care staff monitor an elderly person’s wellbeing from a simple, practical dashboard.",
    videos: ["Documents/optimized/ElderCare Demo - Mobile application optimized.mp4"],
    details: [
      "Designed a caregiver dashboard to view health alerts, daily activity, and emergency monitoring status.",
      "Built the mobile interface to support fast scanning of patient information and quick response workflows.",
      "Integrated the app with system data flow from the wearable monitoring setup to provide a connected care experience.",
      "Focused on clarity, accessibility, and ease of use for everyday caregiving tasks."
    ]
  },
  {
    id: "eldercare-wear-os",
    title: "Elderly Health Monitoring — Wear OS Companion",
    category: "mobile",
    tag: "Wear OS",
    brandName: "Elderly Health Monitoring",
    logo: "Documents/logo.png",
    metric: "Wearable + alerts",
    github: "https://github.com/Dweeey/Galaxywatch",
    description:
      "Developed the Wear OS portion of ElderCare for health monitoring and fall detection, pairing smartwatch signals with emergency alert logic.",
    summary:
      "The Wear OS version focused on real-time monitoring and emergency detection for the user wearing the device, while keeping interaction lightweight and unobtrusive.",
    details: [
      "Created the smartwatch interface for health monitoring, activity signals, and wearable status updates.",
      "Used sensor-driven logic to detect abnormal events and support emergency fall alerting.",
      "Connected wearable inputs to a broader health monitoring workflow so caregiver-side visibility was improved.",
      "Prioritized low-friction usability and reliable alerting for real-world health monitoring scenarios."
    ],
    videos: [
      "Documents/optimized/ElderCare Demo connection of the Mobile application and the WearOS optimized.mp4"
    ]
  },
  {
    id: "smart-parking-lot-system",
    title: "Smart Parking Lot System",
    category: "embedded",
    tag: "Embedded IoT",
    brandName: "Smart Parking Lot System",
    logo: "Documents/Smart Parking lot.jpg",
    metric: "ESP32 + sensors",
    description:
      "Supported the wiring and soldering for an IoT-based smart parking lot using ESP32, ultrasonic sensors, servo motors, and SPI communication.",
    summary:
      "This project focused on automating vehicle entry and occupancy monitoring through an embedded system design built around ESP32 and sensor-driven logic.",
    details: [
      "Assisted in wiring and soldering the ESP32, ultrasonic sensors, servo motors, and supporting electronic components.",
      "Helped assemble the hardware setup for automated vehicle entry and real-time parking occupancy monitoring.",
      "Contributed to the physical integration of the system, supporting the connection of detection and control components.",
      "Worked on the practical hardware implementation needed for a functioning smart parking prototype."
    ]
  },
  {
    id: "student-social-media-app",
    title: "Student Social Media App",
    category: "mobile",
    tag: "Java",
    github: "https://github.com/",
    description:
      "Built a Java-based student interaction platform supporting posting, messaging, and SQL-backed data operations.",
    metric: "Java + SQL",
    summary:
      "A student-centered app focused on communication, post sharing, and simple data management.",
    details: [
      "Created core user flows for posting and social interaction among students.",
      "Used SQL-backed storage to manage app data and support reliable retrieval.",
      "Structured the project to keep the interface simple and functional for a campus community."
    ]
  }
];

const projectGrid = document.getElementById("project-grid");
const filterButtons = document.querySelectorAll(".filter");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalTag = document.getElementById("modal-tag");
const modalSummary = document.getElementById("modal-summary");
const modalGithub = document.getElementById("modal-github");
const modalVideoWrap = document.getElementById("modal-video-wrap");
const modalPoints = document.getElementById("modal-points");
const modalClose = document.getElementById("modal-close");
const certModal = document.getElementById("cert-modal");
const certModalImage = document.getElementById("cert-modal-image");
const certModalTitle = document.getElementById("cert-modal-title");
const certModalClose = document.getElementById("cert-modal-close");
const scrollTopButton = document.getElementById("scroll-top");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-navigation");

const toggleScrollTopButton = () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("visible");
  } else {
    scrollTopButton.classList.remove("visible");
  }
};

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

window.addEventListener("scroll", toggleScrollTopButton, { passive: true });
scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
toggleScrollTopButton();

function openProjectModal(projectId) {
  const selectedProject = projects.find((project) => project.id === projectId) || projects[0];

  modalTitle.textContent = selectedProject.title;
  modalTag.textContent = selectedProject.tag;
  modalSummary.textContent = selectedProject.summary;

  if (selectedProject.github) {
    modalGithub.href = selectedProject.github;
    modalGithub.classList.remove("hidden");
  } else {
    modalGithub.classList.add("hidden");
    modalGithub.removeAttribute("href");
  }

  modalVideoWrap.innerHTML = (selectedProject.videos || [])
    .map(
      (video) => `
        <video controls playsinline preload="metadata">
          <source src="${video}" type="video/mp4" />
        </video>
      `
    )
    .join("");
  modalVideoWrap.classList.toggle("hidden", !(selectedProject.videos && selectedProject.videos.length));
  modalPoints.innerHTML = selectedProject.details
    .map((detail) => `<li>${detail}</li>`)
    .join("");

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  modal.querySelectorAll("video").forEach((video) => {
    video.pause();
    video.src = "";
    video.load();
  });

  modalVideoWrap.innerHTML = "";
  modalVideoWrap.classList.add("hidden");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openCertModal(imageSrc, title) {
  certModalImage.src = imageSrc;
  certModalImage.alt = title;
  certModalTitle.textContent = title;
  certModal.classList.remove("hidden");
  certModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCertModal() {
  certModal.classList.add("hidden");
  certModal.setAttribute("aria-hidden", "true");
  certModalImage.src = "";
  certModalImage.alt = "Certificate preview";
  document.body.classList.remove("modal-open");
}

function renderProjects(selectedCategory = "all") {
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  projectGrid.innerHTML = filteredProjects
    .map(
      (project) => `
        <article class="project-card" data-project-id="${project.id || project.title}" tabindex="0">
          <div class="project-thumb">
            <span class="project-tag">${project.tag}</span>
            ${
              project.logo
                ? `<img src="${project.logo}" alt="${project.brandName || project.title} logo" class="project-logo" />`
                : ""
            }
          </div>
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-meta">
              <span>${project.metric}</span>
              <button type="button" class="project-link" data-project-id="${project.id || project.title}">View case study</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  projectGrid.querySelectorAll(".project-card").forEach((card) => {
    const projectId = card.dataset.projectId;

    card.addEventListener("click", () => {
      openProjectModal(projectId);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectModal(projectId);
      }
    });
  });

  projectGrid.querySelectorAll(".project-link").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openProjectModal(button.dataset.projectId);
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProjects(button.dataset.filter);
  });
});

modal.addEventListener("click", (event) => {
  if (event.target.dataset.close === "true") {
    closeProjectModal();
  }
});

modalClose.addEventListener("click", closeProjectModal);

certModal.addEventListener("click", (event) => {
  if (event.target.dataset.certClose === "true") {
    closeCertModal();
  }
});

certModalClose.addEventListener("click", closeCertModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeProjectModal();
    }
    if (!certModal.classList.contains("hidden")) {
      closeCertModal();
    }
  }
});

document.querySelectorAll(".cert-card-link").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    openCertModal(card.dataset.certImage, card.dataset.certTitle);
  });
});

renderProjects();

document.getElementById("year").textContent = new Date().getFullYear();
