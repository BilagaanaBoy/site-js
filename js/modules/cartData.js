const cartData = () => { 
    const cart = document.querySelector('.js-cart');

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
}


export {
    cartData
};