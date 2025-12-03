const input = document.getElementById("meuTexto");
const btnAdd = document.getElementById("btnAdicionar");
const btnLimpar = document.getElementById("btnExcluir");
const lista = document.getElementById("lista");

btnAdd.addEventListener("click", () => {
    const valor = input.value.trim();

    if (valor === "") return;

    const li = document.createElement("li");
    li.textContent = valor;

    lista.appendChild(li);

    input.value = "";
});

btnExcluir.addEventListener("click", () => {
    lista.innerHTML = "";
});