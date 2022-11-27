const boxes = document.querySelector('.products');

const getProductList = async () => {
    const resp = await fetch('https://veggie-place-products-production.up.railway.app/products');
    const data = resp.json();
    return data;
}

const productList = await getProductList();

for (let i = 0; i < productList.length; i++) {
    if (i == 0) {
        boxes.innerHTML += `
                <a href="./produto-mercado/produto.html" class="item" data-id="${productList[i]._id} data-type="${productList[i].type}">
                        <figure>
                            <img src="${productList[i].image}" alt="${productList[i].name} style="width=150px;">
                            <figcaption>
                                <p>${productList[i].name}</p>
                                <strong>R$ ${productList[i].price.toString().replace('.', ',')}</strong>
                            </figcaption>
                        </figure>
                    </a>
                    `
    } else {
        boxes.innerHTML += `
                <a href="./produto-mercado/produto.html" class="item" data-id="${productList[i]._id} data-type="${productList[i].type}">
                        <figure>
                            <img src="${productList[i].image}" alt="${productList[i].name} style="width=150px;">
                            <figcaption>
                                <p>${productList[i].name}</p>
                                <strong>R$ ${productList[i].price.toString().replace('.', ',')}</strong>
                            </figcaption>
                        </figure>
                    </a>
                    `
    }
}

const items = document.querySelectorAll('.item');
items.forEach((item) => {
    console.log(item.dataset.id);
    item.addEventListener('click', () => {
        localStorage.setItem('dataId', item.dataset.id);
    });
})


