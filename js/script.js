let dropdownVisible = false;

// Show more information
function showMore() {
    let moreInfo = document.getElementById("more-info");
    let buttonEvent = document.getElementById("show-more");

    if (moreInfo.style.display == "none") {
        moreInfo.style.display = "block";
        buttonEvent.textContent = "Show less";
    } else {
        moreInfo.style.display = "none";
        buttonEvent.textContent = "Show more";
    }
}

// Toogle dropdown content
function toogleDropdown() {
    let dropdownContent = document.getElementById("dropdown-content");
    dropdownVisible = !dropdownVisible;
    if (dropdownVisible) {
        dropdownContent.style.display = "block";
        // Add event listener to detect clicks outside dropdown content
        document.addEventListener("click", hideDropdown);
    } else {
        dropdownContent.style.display = "none";
        // Remove event listener when dropdown is hidden
        document.removeEventListener("click", hideDropdown);
    }
}

function hideDropdown(event) {
    let dropdownContent = document.getElementById("dropdown-content");
    if (!event.target.closest(".dropdown")) {
        dropdownContent.style.display = "none";
        dropdownVisible = false;
        document.removeEventListener("click", hideDropdown);
    }
}

// Form submission dectection
function formValidate() {
    let fullName = document.getElementById("fullName");
    let email = document.getElementById("email");

    if (!fullName.value || !email.value) {
        alert("Please enter all the information before submit");
        return false;
    } else if (!email.value.includes("@")) {
        alert("Your email is invalid");
        return false;
    }
    return true;
}
