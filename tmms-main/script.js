let sideNav = document.getElementById("sideNav");
let barsIcon = document.getElementById("barsIcon");

// Execute the function on clicking on the bars-icon btn
barsIcon.onclick = function () {
  // Check if the sideNav is opened
  if (sideNav.classList.contains("opened")) {
    // Remove class opened from the sideNav
    sideNav.classList.remove("opened");
    // Add class closed on the sideNav
    sideNav.classList.add("closed");
    // Set the css property padding to 0
    document.body.style.paddingInlineStart = 0;
  } else {
    // Remove class closed from the sideNav
    sideNav.classList.remove("closed");
    // Add class opened on the sideNav
    sideNav.classList.add("opened");
    // Set the css property padding to 200
    document.body.style.paddingInlineStart = "200px";
  }
};
