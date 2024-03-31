window.addEventListener("beforeunload", function (event) {
    // Cancel the event
    event.preventDefault();

    // Chrome requires returnValue to be set
    event.returnValue = "";

    // Show a confirmation dialog
    let confirmationMessage = "Are you sure you want to leave this page?";
    event.returnValue = confirmationMessage;
    return confirmationMessage;
});
