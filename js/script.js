// Hamburger menu
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

// contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbzYkN10LHx4a-OOMHYAqde1tla91bT7kNVPM3lXL5kt_-B33TDGPia5qPlUokKyzgcW/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            console.log("Success!", response);
            alert("Message sent Succesfully");
            form.reset();
        })
        .catch((error) => {
            console.error("Error!", error.message);
            alert("Error!", error.message);
            form.reset();
        });
});

// AOS library
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// Type library
var typed = new Typed(".type", {
    strings: ["Backend Developer", "Game Developer"],
    startDelay: 500,
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
});
