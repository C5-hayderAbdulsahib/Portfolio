//this is a code to make the toggle on the mobile mode work for the navbar

const barsIcon = document.querySelector(".nav-horizontal__bars-icon");
const rightNavLink = document.querySelector(
  ".nav-horizontal__drop-down-content"
);

barsIcon.addEventListener("click", () => {
  rightNavLink.classList.toggle("hide");
});
