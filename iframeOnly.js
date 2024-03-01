if (window.self == window.top) {
    // If the page is loaded within an iframe
    document.body.innerHTML = ""
    document.head.innerHTML = ""
    alert("This page can only be loaded in an IFrame, not directly.");
    window.location = window.origin
    // You can also redirect or perform other actions to handle this situation
}