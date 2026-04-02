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

const openCart = () => { 
    openCartButton.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        cart.classList.add('active');
        overlay.classList.add('active');
    })
}

const closeCart = () => { 
    closeCartElements.forEach((e) => {
        e.addEventListener('click', () => {
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            cart.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
}

export {
    openCart,
    closeCart
};