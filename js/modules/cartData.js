const cartData = () => { 
    const cart = document.querySelector('.js-cart');

    const updateCartItemCount = () => { 
        cart.addEventListener('click', (e) => {
            
            let currentItems, minusBt;
            if(e.target.matches('.js-minus') || e.target.matches('.js-plus')){
                const counter = e.target.closest('js-counter');
                currentItems = e.target.querySelector('js-current-items');
            }

            if (e.target.matches('.js-plus')) {
                currentItems.textContent = ++currentItem.textContent;
                minusBt.classList.remove('disabled');
            }

            if (e.target.matches('.js-minus')) {

                if (parseInt(currentItems.textContent) > 2) {
                    currentItems.textContent = --currentItem.textContent;
                } else if (parseInt(currentItems.textContent) === 2) {
                    currentItems.textContent = --currentItem.textContent;
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