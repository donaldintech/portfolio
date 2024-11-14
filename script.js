const button = document.getElementById("colorChangeBtn");
const header = document.querySelector("header");

button.addEventListener("click", () => {
    header.style.color = header.style.color === "blue" ? "black" : "blue";
});
