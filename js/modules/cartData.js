const cartData = () => { 
    const cart = document.querySelector('.js-cart');
    const productsList = document.querySelector('.js-products-list');
    const cartList = document.querySelector('.js-cart-list');
    

    const productInfo = {};

    const updateCartItemCount = () => { 
        cart.addEventListener('click', (e) => {
            
            let currentItems, minusBt;
            if(e.target.matches('.js-minus') || e.target.matches('.js-plus')){
                const counter = e.target.closest('.js-counter');
                currentItems = counter.querySelector('.js-current-items');
                minusBt = counter.querySelector('.js-minus');
            }

            if (e.target.matches('.js-plus')) {
                currentItems.textContent = ++currentItems.textContent;
                minusBt.classList.remove('disabled');
            }

            if (e.target.matches('.js-minus')) {
                if (parseInt(currentItems.textContent) > 2) {
                    currentItems.textContent = --currentItems.textContent;
                } else if (parseInt(currentItems.textContent) === 2) {
                    currentItems.textContent = --currentItems.textContent;
                    minusBt.classList.add('disabled');
                }
            }
        })
    };
    updateCartItemCount();

    const addProductToCart = () => {
        productsList.addEventListener('click', (e) => {
            if(e.target.classList.contains('js-buy-button')) {
                const product = e.target.closest('.js-product');

                const imageCard = product.querySelector('.js-image-card');
                const modelCard = product.querySelector('.js-title-card');
                const priceCard = product.querySelector('.js-price-card');
                const linkCard = product.querySelector('.js-link-card');

                productInfo.id = linkCard.getAttribute('id');
                productInfo.model = modelCard.textContent;
                productInfo.price = priceCard.textContent;
                productInfo.photo = imageCard.src;
                
                const productInCart = cartList.querySelector(`#${productInfo.id}`);

                if (productInCart) {
                    const currentItemsProduct = productInCart.querySelector('.js-current-items');
                    currentItemsProduct.textContent = parseInt(currentItemsProduct.textContent) + 1;

                    const minusBt = productInCart.querySelector('.js-minus');
                    minusBt.classList.remove('disabled');
                } else {
                    renderProductCard();
                }
            }
        })
    }
    addProductToCart();

    const renderProductCard = () => { 
        const li = document.createElement('li');
        li.classList.add('cart-item', 'column', 'js-cart-item');

        li.innerHTML =  `
            <span class="close"></span>
            <div class="cartline row jcfs aic" id="${productInfo.id}">
                <div class="cart-image-container">
                    <img src="${productInfo.photo}" alt="" class="cart-img">
                </div>
                <div class="column">
                    <div class="cart-model row jcfs aic">
                        ${productInfo.model}
                    </div>
                    <div class="row jcsb aic">
                        <div class="counter row jcc aic js-counter">
                            <button type="button" class="minus control row jcc aic js-minus disabled" >-</button>
                            <div class="current-items row jcc aic js-current-items">1</div>
                            <button type="button" class="plus control row jcc aic js-plus">+</button>
                        </div>
                        <div class="row jcc aic">
                            <span class="cart-price  row jcfe" data-price="${productInfo.price}">${productInfo.price}</span>
                            <span class="rouble">₽</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        cartList.append(li);
    }

    const removeProductInCart = () => {
        cartList.addEventListener('click', (e) => {
            if(e.target.classList.contains('js-remove')){
                const cartItem = e.target.closest('.js-cart-item');
                cartItem.remove();
            }
        })
    }
    removeProductInCart();
    
}


export {
    cartData
};