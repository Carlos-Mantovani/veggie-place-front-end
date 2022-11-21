
// Valores e informações 
const priceProduct = document.querySelector("#price"); // p-preço
const totalPrice = document.querySelector("#total-price"); // botão adicionar

let price = 14.99;

priceProduct.textContent = `R$ ${price}`;
totalPrice.textContent = `R$ ${price}`;

// ADICIONAR PRODUTOS PRA COMPRAR
const counter = document.querySelector("#quantity");
const btns = document.querySelectorAll(".btn");

let quantity = 1;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        {
            if(quantity >= 1){
                if(styles.contains('increase')){
                    quantity++;
                } else {
                    quantity--;
                }
            } else{
               quantity++;
            }
        }
        
        const multiply = price * quantity; // valor produto * quantidade de pedidos
        counter.textContent = quantity; //quantidade de pedidos
        totalPrice.textContent = `R$ ${multiply.toFixed(2)}`; // valor final no botão adicionar
    });
});



