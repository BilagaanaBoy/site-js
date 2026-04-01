const paginate = (products) => {
    let productCount = 2;
    let productPage = 1;

    const productContainer = document.querySelector('js-pagination-list');
    const pagination = document.querySelector('js-pagination');
    const btnPrev = document.querySelector('pagination-btn-prev');
    const btnNext = document.querySelector('pagination-btn-next');

    const renderProduct = (products, container, numOfProd, page) => {
        productContainer.innerHTML = "";

        const firstP = numOfProd * page - numOfProd;
        console.log('firstP ', firstP)

        const lastP = firstP + numOfProd;
        console.log('lastP ', lastP)

        const pOnPage = products.slice(firstP, lastP);
        console.log('pOnPage ', pOnPage)
    };

    renderProduct(products, productContainer, productCount, productPage)
};

export {
    paginate
}