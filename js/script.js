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