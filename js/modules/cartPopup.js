const cart = document.querySelector('.js-cart');
const overlay = document.querySelector('.js-overlay');
const openCartButton = document.querySelector('.js-cart-btn');
const closeCartElements = document.querySelectorAll('.js-close-cart');

const getScrollBarWidth = () => {
    let div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.append(div);
    let scrollBarWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollBarWidth;
}

const scroll = getScrollBarWidth();

const toggleCart = (isActive) => {
    document.body.style.overflow = isActive ? 'hidden' : '';
    document.body.style.marginRight = isActive ? `${scroll}px` : `0px`;
    cart.classList.toggle('active', isActive);
    overlay.classList.toggle('active', isActive);
}

const openCart = () => { 
    openCartButton.addEventListener('click', () => {
        toggleCart(true);
    })
}

const closeCart = () => { 
    closeCartElements.forEach((e) => {
        e.addEventListener('click', () => {
            toggleCart(false);
        });
    });
}

export {
    openCart,
    closeCart
};