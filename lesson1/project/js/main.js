const products = [
    {id: 1, title: 'Notebook', price: 20000, image: "images/1.jpeg"},
    {id: 2, title: 'Mouse', price: 1500, image: "images/2.jpeg"},
    {id: 3, title: 'Keyboard', price: 5000, image: "images/3.jpeg"},
    {id: 4, title: 'Gamepad', price: 4500, image: "images/4.jpeg"},
];

const renderProduct = (title, price, image) => {
    return `<div class="product-item">
            <img class="img_sale" src="${image}">
            <h3>${title}</h3>
            <p>${price}</p>
          </div>`;
};

const renderProducts = goodsList => {
    document.querySelector('.products').innerHTML = goodsList.map(good => renderProduct(good.title, good.price, good.image)).join("");
};

renderProducts(products);
