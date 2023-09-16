/**Products Json */
let productsJson = [];

try {
    fetch("../products.json").then(res => res.json())
    .then((products) => {
        products.forEach((product) => {
            productsJson.push(product);
        });
    });
} catch(err) {}

/**Create Product element */
function createProduct(href, name, image, price, discount) {
    if (discount) {
        const card = document.createElement("div");

        card.innerHTML = `
            <nav>
                <a href="${href}">
                <img class="image" src="${image}" alt="" draggable="false" loading="lazy" />
                <div class="card-content">
                    <h2 class="title">${name}</h2>
                    <h1 class="price">Rp. ${price.toLocaleString("id-ID")}</h1>
                    <h3 class="discount">Rp. ${discount.toLocaleString("id-ID")}</h3>
                </div>
                </a>
            </nav>
        `;
        card.classList.add("card");

        return card;
    }
    else {
        const card = document.createElement("div");

        card.innerHTML = `
            <nav>
                <a href="${href}">
                <img class="image" src="${image}" alt="" draggable="false" loading="lazy" />
                <div class="card-content">
                    <h2 class="title">${name}</h2>
                    <h1 class="price">Rp. ${price.toLocaleString("id-ID")}</h1>
                </div>
                </a>
            </nav>
        `;
        card.classList.add("card");

        return card;
    }
}

/**Get all Products Element */
function getProducts() {
    let products = [];

    for (const product of productsJson) {
        const card = createProduct(product.url, product.name, product.image, product.price, product.discount);
        products.push(card);
    }

    return products;
}

/**Set Products to HTML */
function setProducts(products) {
    const container = document.querySelector(".products").querySelector(".card-container");

    container.innerHTML="";
    for (const product of products) {
        container.appendChild(product);
    }
}

/**Render Shop */
function renderShop() {
    const rendr = document.querySelector(".webpage");

    fetch(`../pages/shop.html`)
    .then(res => res.text())
    .then(value => {
        rendr.innerHTML=value;
    })
    .then(() => {
        setProducts(getProducts());
        clearInterval(slideChange);
    });
}