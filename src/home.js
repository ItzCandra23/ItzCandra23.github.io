let slideIndex = 1;
let slideChange;
let sliderPos = 0;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelector(".slidepage").getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

/**Slides Json */
let slidesJson = [];
let teamJson = [];

try {

    /**Slides.json */
    fetch("./slides.json").then(res => res.json())
    .then((slides) => {
        slides.forEach((slide) => {
            slidesJson.push(slide);
        });
    });

    /**Team.json */
    fetch("./team.json").then(res => res.json())
    .then((cards) => {
        cards.forEach((card) => {
            teamJson.push(card);
        });
    })
} catch(err) {}


/**HomeSlide */
const HomeSlide = {

    /**Create slide element */
    createSlide(url, image) {
        const slide = document.createElement("div");

        slide.innerHTML = `
        <div href="${url}">
            <img src="${image}" alt="">
        </div>
        `;
        slide.classList.add("slide");

        return slide;
    },

    /**Get all slides emenent */
    getSlides() {
        let slides = [];

        for (const slide of slidesJson) {
            const slideElement = this.createSlide(slide.url, slide.image);
            slides.push(slideElement);
        }

        return slides;
    },

    /**Set slides */
    setSlides(slides) {
        const container = document.querySelector(".slidepage").querySelector(".slides");

        container.innerHTML="";
        for (const slide of slides) {
            container.appendChild(slide);
        }
    }
};


function slideNext() {
    const slides = document.querySelector(".homepage .welcome .slider .slide-wrapper .slides");
    const img = slides.querySelector("img");
    const maxSlide = slides.querySelectorAll("img").length;

    if ((sliderPos + 1) === maxSlide) {
        slides.scrollLeft=0;
        sliderPos=0;
        return;
    }
    
    slides.scrollLeft+=img.width;
    sliderPos+=1;
}

function slidePrev() {
    const slides = document.querySelector(".homepage .welcome .slider .slide-wrapper .slides");
    const img = slides.querySelector("img");
    const maxSlide = slides.querySelectorAll("img").length;

    let maxSlideWidth = 0;
    slides.querySelectorAll("img").forEach((value) => {
        maxSlideWidth+=value.width;
    });

    if (slides.scrollLeft === 0) {
        slides.scrollLeft=maxSlideWidth;
        sliderPos=(maxSlide-1);
        return;
    }

    slides.scrollLeft-=img.width;
}

/**WelcomeSlide */
const WelcomeSlide = {

};

/**TeamPage */
const TeamPage = {

    /**Create Social Element */
    createSocial(social) {
        const element = document.createElement("ul");
        let ul = [];

        social.forEach((value) => {
            let li = ``;

            if (value.type === "instagram") {
                li=`<li><a href="${value.url}"><i class="bx bxl-instagram"></i></a></li>`;
            }
            if (value.type === "discord") {
                li=`<li><a href="${value.url}"><i class="bx bxl-discord-alt"></i></a></li>`;
            }
            if (value.type === "github") {
                li=`<li><a href="${value.url}"><i class="bx bxl-github"></i></a></li>`;
            }
            if (value.type === "youtube") {
                li=`<li><a href="${value.url}"><i class="bx bxl-youtube"></i></a></li>`;
            }
            if (value.type === "whatsapp") {
                li=`<li><a href="${value.url}"><i class="bx bxl-whatsapp"></i></a></li>`;
            }

            ul.push(li);
        });

        element.innerHTML=ul.join("");
        element.classList.add("contact");

        return element;
    },

    /**Create Element */
    createCard(name, role, profile, social) {
        const card = document.createElement("div");

        card.innerHTML=`
        <nav>
            <img src="${profile}" alt="" class="profile">
            <ul class="contact">
                ${this.createSocial(social).innerHTML}
            </ul>
            <div class="team">
                <h2>${name}</h2>
                <h4>${role}</h4>
            </div>
        </nav>
        `;
        card.classList.add("card");

        return card;
    },

    /**Get all team cards element */
    getCards() {
        let cards = [];

        for (const card of teamJson) {
            const element = this.createCard(card.name, card.role, card.profile, card.social);
            cards.push(element);
        }

        return cards;
    },

    /**Set all team cards */
    setCards(cards) {
        const container = document.querySelector(".homepage").querySelector(".teams").querySelector(".container");

        container.innerHTML="";
        for (const card of cards) {
            container.appendChild(card);
        }
    }
};

/**Render */
function renderHome() {
    const rendr = document.querySelector(".webpage");

    fetch(`../pages/home.html`)
    .then(res => res.text())
    .then(value => {
        rendr.innerHTML=value;
    })
    .then(() => {

        /**Set slides */
        HomeSlide.setSlides(HomeSlide.getSlides());
        showSlides(slideIndex);
        slideChange = setInterval(() => {
            plusSlides(1);
            slideNext();
        }, 3500);

        /**Set Team */
        TeamPage.setCards(TeamPage.getCards());
    });
}