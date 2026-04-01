const renderProductCard = (product) => { 
    const li = document.createElement('li');

    return li;
}

const appendProductCard = (product, container) => { 
    container.append(product);
}

const renderProductCards = (products, productContainer) => {

    products.forEach((e) => {
        const card = renderProductCard(e);
        console.log('card: ', card);
        appendProductCard(card, container);
    });
};

export {
    renderProductCards
};