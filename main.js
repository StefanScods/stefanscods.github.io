// Load the particle script upon DOM start,
document.addEventListener(
    "DOMContentLoaded",
    (event) => {
      particlesJS.load("particles-js", "/assets/particles/particles.json", function () {
        console.log("Loaded particles.js");
      });
    },
    false
  );