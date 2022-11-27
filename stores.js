const boxes = document.querySelector('.stores');

const getRestaurantList = async () => {
    const resp = await fetch('https://veggie-place-stores-production.up.railway.app/stores');
    const data = resp.json();
    return data;
}

const restaurantList = await getRestaurantList();

const createStores = () => {
    for (let i = 0; i < restaurantList.length; i++) {
        if (i == 0) {
            boxes.innerHTML += `
            <a href="#" class="item2 current-item2">
                <figure>
                    <img src="./img/Marca 1.svg" alt="${restaurantList[i].name}">
                    <figcaption>
                        <p>${restaurantList[i].name}</p>
                    </figcaption>
                </figure>
            </a>
        `
        } else {
            boxes.innerHTML += `
            <a href="#" class="item2">
                <figure>
                    <img src="./img/Marca 1.svg" alt="${restaurantList[i].name}">
                    <figcaption>
                        <p>${restaurantList[i].name}</p>
                    </figcaption>
                </figure>
            </a>
        `
        }
    }
    const slider = document.createElement('script');
    slider.src = 'slider.js';
    document.head.appendChild(slider);
}
createStores();
const items = document.querySelectorAll('.item');
items.forEach((item) => {
    console.log(item.dataset.id);
    item.addEventListener('click', () => {
        localStorage.setItem('dataId', item.dataset.id);
    });
})


