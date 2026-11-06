
const scene = document.querySelector("#scene");
const progressText = document.querySelector("#progress");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function runIntro() {
  scene.classList.add("loading");

  const duration = 3000;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;

    const progress = Math.min(
      Math.floor((elapsed / duration) * 100),
      100
    );

    progressText.textContent = progress;

    if (elapsed < duration) {
      requestAnimationFrame(updateCounter);
      return;
    }

    progressText.textContent = 100;

    // Light up the background
    scene.classList.add("lit");

    // Reveal the website elements
    setTimeout(() => {
      scene.classList.add("loaded");
      scene.classList.remove("loading");
    }, 160);
  }

  requestAnimationFrame(updateCounter);
}

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});

// Close the menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );
  });
});

// Start the intro animation
runIntro();
