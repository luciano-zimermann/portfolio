document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", updatePrice);
document.querySelector("#js").addEventListener("change", updatePrice);
document.querySelector("#layout-sim").addEventListener("change", updatePrice);
document.querySelector("#layout-nao").addEventListener("change", updatePrice);
document.querySelector("#prazo").addEventListener("change", function () {
    const deadline = document.querySelector("#prazo").value;
    document.querySelector("label[for=prazo]").innerHTML = deadline > 1 ? `Prazo: ${deadline} semanas` : `Prazo: ${deadline} semana`;
    updatePrice();
});

function updatePrice(){
    const qtde = document.querySelector("#qtde").value;
    const hasJs = document.querySelector("#js").checked;
    const includesLayout = document.querySelector("#layout-sim").checked;
    const notIncludesLayout = document.querySelector("#layout-nao").checked;
    const deadline = document.querySelector("#prazo").value;
    
    let price = qtde * 100;
    if (hasJs) price *= 1.1;
    if (includesLayout) price += 500;
    if (notIncludesLayout && price > 0) price -= 500; 
    let urgency = 1 - deadline * 0.1;
    price *= 1 + urgency;

    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}`;
}