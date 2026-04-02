const cartData = () => { 
    const cart = document.querySelector('.js-cart');

    const updateCartItemCount = () => { 
        cart.addEventListener('click', (e) => {
            if(e.target.matches('.js-minus') || e.target.matches('.js-plus')){
                console.log(1)
            }
        })
    };

    updateCartItemCount();
}


export {
    cartData
};