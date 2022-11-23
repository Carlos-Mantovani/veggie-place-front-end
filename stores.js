const boxes = document.querySelector('.stores');

const getRestaurantList = async () => {
    const resp = await fetch('https://veggie-place-stores-production.up.railway.app/stores');
    const data = resp.json();
    return data;
}

const restaurantList = await getRestaurantList();
console.log(restaurantList);

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

