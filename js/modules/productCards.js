const renderProductCard = ({id, photo, model, prices, like}) => { 
    const li = document.createElement('li');
    console.log(like)
    li.classList.add('product', 'item', 'column', 'aic', 'js-product');
    li.innerHTML =  `
        <div class="favorites js-favorites">
            ` 
                (like) ? 
                `<span class="heart-filled js-heart-filled">
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"></path></svg> 
                </span>`
                            
                :
                
                `<span class="heart-filled js-heart-filled hidden">
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"></path></svg> 
                </span>`
            `
        </div>
        <a href="#" id="${id}" class="link column aic js-link-card">
            
            <div class="product-image row jcc">
                <img src="img/products/${photo}" alt="" class="image js-image-card">   
            </div>
            <div class="product-description">
                <h3 class="title js-title-card">${model}</h3>
            </div>  
            <div class="product-price">
                <span class="price js-price-card">${prices}</span><span>₽</span>
            </div>       
        </a>
        <button type="button" class="addCart buy-button js-buy-button">В корзину</button>
    `;

    return li;
}

const appendProductCard = (product, container) => { 
    container.append(product);
}

const renderProductCards = (products, container) => {
    products.forEach((e) => {
        const card = renderProductCard(e);
        
        appendProductCard(card, container);
    });
};

export {
    renderProductCards
};