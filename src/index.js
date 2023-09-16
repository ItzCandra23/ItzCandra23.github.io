/**Navbar Scroll Hide */
let prevScrollPos = window.pageYOffset;
  
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.querySelector(".navbar");
    
    if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }

    prevScrollPos = currentScrollPos;
}

/**Navbar Toggle for Mobile */
function toggleMobile() {
    const obj = document.querySelector(".navbar");
    obj.classList.toggle("toggle");
}

/**Render Page */
function render(web) {
    const rendr = document.querySelector(".webpage");

    fetch(`../pages/${web}.html`)
    .then(res => res.text())
    .then(value => {
        rendr.innerHTML=value;
        clearInterval(slideChange);
    })
    .catch((err) => {
        rendr.innerHTML="Not Found: 404";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderHome();
});