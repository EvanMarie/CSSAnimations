const animations = [
  "bounce",
  "bounceIn",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "fadeIn",
  "fadeInDown",
  "fadeInLeft",
  "fadeInOut",
  "fadeInRight",
  "fadeInUp",
  "fadeOut",
  "fadeOutDown",
  "fadeOutLeft",
  "fadeOutRight",
  "fadeOutUp",
  "flash",
  "hinge",
  "jackInTheBox",
  "pulse",
  "rotate",
  "rotateIn",
  "rotateInDownLeft",
  "rotateInDownRight",
  "rotateInLeft",
  "rotateInRight",
  "rotateInUpLeft",
  "rotateInUpRight",
  "rotateOut",
  "rotateOutDownLeft",
  "rotateOutDownRight",
  "rotateOutLeft",
  "rotateOutRight",
  "rotateOutUpLeft",
  "rotateOutUpRight",
  "rollIn",
  "rollOut",
  "shake",
  "slideInDown",
  "slideInLeft",
  "slideInRight",
  "slideInUp",
  "slideOutDown",
  "slideOutLeft",
  "slideOutRight",
  "slideOutUp",
  "swing",
  "wobble",
  "zoomIn",
  "zoomInDown",
  "zoomInLeft",
  "zoomInRight",
  "zoomInUp",
  "zoomOut",
  "zoomOutDown",
  "zoomOutLeft",
  "zoomOutRight",
  "zoomOutUp",
];

// Populate the dropdown with animation names
const animationSelect = document.getElementById("animationSelect");
animations.forEach((animation) => {
  const option = document.createElement("option");
  option.value = animation;
  option.textContent = animation;
  animationSelect.appendChild(option);
});

// Populate the duration dropdown
const durationSelect = document.getElementById("durationSelect");
for (let i = 0.1; i <= 3.0; i += 0.1) {
  const option = document.createElement("option");
  option.value = i.toFixed(1); // Fixing the value to 1 decimal place
  option.textContent = i.toFixed(1);
  if (i.toFixed(1) === "0.8") {
    // Check if the value is 0.8
    option.selected = true; // Set this option as the default selected option
  }
  durationSelect.appendChild(option);
}

// Function to apply animation
function applyAnimation() {
  const selectedAnimation = animationSelect.value;
  const selectedDuration = durationSelect.value || "0.8"; // Use selected value or default to 0.8s
  let imageCard = document.querySelector(".imageCard img");

  // Reset any existing animations and styles first
  resetImageCard();

  // Apply the selected animation and duration
  imageCard.classList.add(selectedAnimation);
  imageCard.style.animationDuration = `${selectedDuration}s`;

  // Listen for the animationend event, and reset the image when the animation completes
  imageCard.addEventListener("animationend", function listener() {
    resetImageCard();
    // Remove the event listener so it doesn't get triggered multiple times
    imageCard.removeEventListener("animationend", listener);
  });
}

// Function to cancel animation
function cancelAnimation() {
  const imageCard = document.querySelector(".imageCard img");

  // Remove all animations from the image and reset styles
  animations.forEach((animation) => {
    imageCard.classList.remove(animation);
  });
  imageCard.style.animationDuration = ""; // Reset to default
}

// Function to reset image card
function resetImageCard() {
  const imageCard = document.querySelector(".imageCard img");

  // Remove all animations from the image and reset styles
  animations.forEach((animation) => {
    imageCard.classList.remove(animation);
  });
  imageCard.style.animationDuration = ""; // Reset to default
}

// Function to cancel animation
function cancelAnimation() {
  resetImageCard();
}
