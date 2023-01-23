console.log("Hello form FrontEnd/index.js");

$("#getProductsButton").on("click", function (e) {
    $.ajax({
        url: "http://localhost:8080/products",
        type: "GET",
        cors: true,
        success: function (products) { addProductstoPage(products) },
        error: function (error) { console.error(error) }
    })
});
function addProductstoPage(products) {
    const productContainer = $("#productsContainer");

    for (let product of products) {
        productContainer.append(createProduct(product))
    }
}




function createProduct(product) {
    //Create the card container with col-3 and mb-3 class
    const cardContainer = $("<div>", { class: "col-12 col-lg-4 col-xxl-3 d-flex justify-content-center mb-3" });
    //Create the card element
    const card = $(`<div class="card bg-dark border border-light text-white p-3" style="width: 18rem;"></div>`);
    //Create the image element
    const image = $(`<img class="card-img-top border border-light rounded" height="250" src="${product.imageUrl}">`);
    //Create the card body element
    const cardBody = $(`<div class="card-body border rounded mt-1"></div>`);
    //Create the name element
    const name = $(`<h5 class="card-title text-center">${product.name}</h5>`);
    //Create the description element
    const description = $(`<p class="card-text">${product.description}</p>`);
    //Create the price element
    const price = $(`<p class="card-text">${product.price}</p>`);

    //Append the elements to the card
    cardBody.append(name);
    cardBody.append(description);
    cardBody.append(price);
    card.append(image);
    card.append(cardBody);
    //append the card to the container
    cardContainer.append(card);
    return cardContainer;
}

//funktioniert noch nicht Unterricht fragen!



document.addEventListener("DOMContentLoaded", function() {
    //Rufe die createProduct Funktion hier auf
    const product = {
        name: "Product Name",
        description: "Product Description",
        price: "$50",
        imageUrl: "https://via.placeholder.com/250x250.png?text=Product+Image"
    };
    const card = createProduct(product);
    // Füge das erstellte Element zu einem bestimmten Bereich auf der Seite hinzu
    document.querySelector("#product-container").appendChild(card[0]);
});


