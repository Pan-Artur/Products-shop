const items = [
    {
        name: "Banana",
        price: 100,
        photo: "https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg",
    },

    {
        name: "Kiwi",
        price: 150,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrSVHtAtwClMoi7ctLgOsC6cI5SvshSW-Zw&s",
    },

    {
        name: "Granate",
        price: 200,
        photo: "https://www.thefruitcompany.com/cdn/shop/products/pomegranate_4_1.jpg?v=1664807413",
    },

    {
        name: "Apple",
        price: 25,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCWjL2TZWKBDLm5dBUm23BoZoKNvWzvC-fA&s",
    },

    {
        name: "Dragon fruit",
        price: 225,
        photo: "https://growpro-eg.com/cdn/shop/files/8_9a0e1993-810c-40df-9bb2-d451e3def020.png?v=1711754676",
    },

    {
        name: "Strawberry",
        price: 50,
        photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1JRqYt88JbefZAUBu0VZ5iay41bhLFNFb_qpUjPvLkgaBmtbA67fXXWKsdGCNUVKEaAIBEf7jjrmdSvc65GrqiQ",
    },

    {
        name: "Pineapple",
        price: 100,
        photo: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/56e9ce4cccda1111007afc8e_365_-pineapple.1.jpg",
    },

    {
        name: "Mango",
        price: 200,
        photo: "https://draxe.com/wp-content/uploads/2019/04/DrAxeMangoNutritionThumbnail.jpg",
    },

    {
        name: "Grape",
        price: 175,
        photo: "https://gofresh.com.kw/wp-content/uploads/2023/10/grapgree-1-600x600.jpg",
    },
];

const listEl = document.createElement("ul");
const modal = document.querySelector(".shop-modal");
const backdrop = document.querySelector(".backdrop");

items.forEach((obj) => {
    const itemEl = document.createElement("li");
    listEl.append(itemEl);

    const nameEl = document.createElement("h3");
    nameEl.textContent = obj.name;

    itemEl.append(nameEl);

    const priceEl = document.createElement("p");
    priceEl.textContent = `Ціна: ${obj.price}грн`;

    itemEl.append(priceEl);

    const photoEl = document.createElement("img");
    photoEl.src = obj.photo;

    itemEl.append(photoEl);
}); 

document.body.append(listEl);

listEl.addEventListener("click", openModal);

function openModal(e) {
    modal.classList.remove("is-hidden");
    backdrop.classList.remove("is-hidden");
}

backdrop.addEventListener("click", closeModal);

function closeModal(e) {
    if (e.target === backdrop) {
        modal.classList.add("is-hidden");
        backdrop.classList.add("is-hidden");
    }
}
