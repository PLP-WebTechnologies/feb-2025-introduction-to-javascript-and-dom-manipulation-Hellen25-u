function changeHeading() {
  document.querySelector("h1").textContent = "Hellen A. – Future CFO & Innovator";
}

function toggleStyle() {
  document.body.classList.toggle("alt-style");
}

function toggleElevator() {
  const section = document.getElementById("elevator");
  section.style.display = (section.style.display === "none") ? "block" : "none";
}
