const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 2;
    }

    if (currentItem >= maxItems) {
      currentItem = 1;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    items[currentItem].classList.add("current-item");
  });
});

const controls2 = document.querySelectorAll(".control2");
let currentItem2 = 1;
const items2 = document.querySelectorAll(".item2");
console.log(items2);
const maxItems2 = items.length + 2;

controls2.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left2");

    if (isLeft) {
      currentItem2 -= 1;
    } else {
      currentItem2 += 2;
    }

    if (currentItem2 >= maxItems2) {
      currentItem2 = 1;
    }

    if (currentItem2 < 0) {
      currentItem2 = maxItems2 - 1;
    }

    items2.forEach((item) => item.classList.remove("current-item2"));
    console.log(items2);
    console.log(currentItem2)
    items2[currentItem2].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    items2[currentItem2].classList.add("current-item2");
  });
});