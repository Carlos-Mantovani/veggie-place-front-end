
// OPÇÂO COM OU SEM 
let radioOptions = document.querySelectorAll("input[name='with']");
let radioChecked;

let findSelected = () => {
    let selected = document.querySelector("input[name='with']:checked").value;
    console.log(`Valor selecionado é: ${selected}`);
}

radioOptions.forEach(radioOption => {
    radioOption.addEventListener("change", findSelected);
})

findSelected();
 radioChecked = findSelected();


// Valores e informações 
const priceProduct = document.querySelector("#price"); // p-preço
const totalPrice = document.querySelector("#total-price"); // botão adicionar

let price = 18.49;

priceProduct.textContent = `R$ ${price}`;
totalPrice.textContent = `R$ ${price}`;

const textarea = document.querySelector("#comment"); // textarea de comentário

function adicionarTexto() {
    console.log(textarea.value)
    alert("Comentário salvo")
}

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



