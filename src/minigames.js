
let gamesJson = [];

try {
    fetch("../games.json").then(res => res.json())
    .then((cards) => {
        cards.forEach((card) => {
            gamesJson.push(card);
        });
    })
} catch(err) {}

/**MiniGames */
const MiniGames = {

    /**Play Game */
    play(game) {
        const rendr = document.querySelector(".webpage");

        fetch(`../games/${game}.html`)
        .then(res => {
            if (res.type === "error") {
                render("notfound");
                return;
            }

            return res.text();
        })
        .then(value => {
            rendr.innerHTML=value;
            clearInterval(slideChange);
        })
        .catch((err) => {
            render("notfound");
        });
    },

    /**Create Element */
    createCard(title, subtitle, image, game) {
        const card = document.createElement("div");

        card.innerHTML=`
        <nav>
            <img src="${image}" alt="" class="image" onclick="MiniGames.play('${game}')">
            <div class="team">
                <h2>${title}</h2>
                <h4>${subtitle}</h4>
            </div>
        </nav>
        `;
        card.classList.add("card");

        return card;
    },

    /**Get all team cards element */
    getCards() {
        let cards = [];

        for (const card of gamesJson) {
            const element = this.createCard(card.title, card.subtitle, card.image, card.game);
            cards.push(element);
        }

        return cards;
    },

    /**Set all team cards */
    setCards(cards) {
        const container = document.querySelector(".minigames").querySelector(".cards");

        container.innerHTML="";
        for (const card of cards) {
            container.appendChild(card);
        }
    }
};

/**Render MiniGames Page */
function renderMiniGames() {
    
    const rendr = document.querySelector(".webpage");
    fetch(`./pages/minigames.html`)
    .then(res => res.text())
    .then(value => {
        rendr.innerHTML=value;
    })
    .then(() => {
        MiniGames.setCards(MiniGames.getCards());
    });
}