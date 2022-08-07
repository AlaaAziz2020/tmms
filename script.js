// Get all selectors
let sideNav = document.getElementById("sideNav");
let barsIcon = document.getElementById("barsIcon");
let searchMenu = document.querySelector(".search-menu");
let searchInput = document.getElementById("searchInput");
let closeSearchMenu = document.getElementById("closeSearchMenu");


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

function createSearchMenuElements(items) {
  // Loop on items parameter
  for (let i in items) {
    // Create link element
    let link = document.createElement("a");
    // Pass href attribute to the created link element
    link.href = "#";
    // Add classes to the created link element
    if (i != items.length - 1)
      link.className =
        "search-item text-decoration-none d-block w-100 text-dark border-bottom border-2";
    else
      link.className =
        "search-item text-decoration-none d-block w-100 text-dark";
    // Create the text for the created link element
    let linkText = document.createTextNode(items[i]);
    // Append text to the link
    link.appendChild(linkText);
    // Append the created link element to the searchMenu
    searchMenu.appendChild(link);
  }
}

// Search function
let searchItems = [
  "Advertisements",
  "New Tenders",
  "Tenders History",
  "Live Competition",
  "My Products",
];

function search() {
  // Show searchMenu box
  searchMenu.classList.remove("d-none");
  // Show closeSearchMenu btn
  closeSearchMenu.classList.remove("d-none");
  // Get all searchMenu items
  let allSearchItems = searchMenu.querySelectorAll("a");
  // Remove all searchMenu items
  if (allSearchItems) allSearchItems.forEach((el) => el.remove());
  // Check that the  searchInput is not empty
  if (/S/.test(searchInput.value)) {
    // Calling of createSearchMenuElements function
    createSearchMenuElements(searchItems);
  } else {
    // Hide closeSearchMenu btn
    closeSearchMenu.classList.remove("d-none");
    // Get all items that match the input of the searchInput
    let matchedItems = searchItems.filter((item) => item.includes(this.value));
    // Calling of createSearchMenuElements function
    createSearchMenuElements(matchedItems);
  }
}

// Execute search function when focusing and inputting on the searchInput
searchInput.onfocus = search;
searchInput.oninput = search;

closeSearchMenu.onclick = function () {
  // Set the value of the searchInput to be empty
  searchInput.value = "";
  // Hide closeSearchMenu button
  this.classList.add("d-none");
  // Hide searchMenu box
  searchMenu.classList.add("d-none");
  // Remove all searchMenu items
  let allSearchItems = searchMenu.querySelectorAll("a");
  if (allSearchItems) allSearchItems.forEach((el) => el.remove());
};

//Core//
function createInfoMenuElements(items) {
  // Loop on items parameter
  for (let i in items) {
    // Create link element
    let link = document.createElement("a");
    // Pass href attribute to the created link element
    link.href = "#";
    // Add classes to the created link element
    if (i != items.length - 1)
      link.className =
        "info-item text-decoration-none d-block w-100 text-dark border-bottom border-2";
    else
      link.className =
        "info-item text-decoration-none d-block w-100 text-dark";
    // Create the text for the created link element
    let linkText = document.createTextNode(items[i]);
    // Append text to the link
    link.appendChild(linkText);
    // Append the created link element to the searchMenu
   infoMenu.appendChild(link);
  }
}

// Search function//
// for preventing animations on load
window.addEventListener("DOMContentLoaded",() => {
	const atr = new ATRToggle(".toggle");
});

class ATRToggle {
	constructor(qs) {
		this.el = document.querySelector(qs);
		this.input = this.el?.querySelector("input");
		this.input?.addEventListener("change",this.removePristine.bind(this));
	}
	removePristine() {
		this.el?.classList.remove("toggle--pristine");
	}
}