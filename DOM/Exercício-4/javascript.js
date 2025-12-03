const valorDisplay = document.getElementById("valor");
const btnMaisUm = document.getElementById("btnMaisUm");
const btnMenosUm = document.getElementById("btnMenosUm");

let contador = 0;

function atualizarDisplay() {
      valorDisplay.textContent = contador;
}

btnMaisUm.addEventListener('click', () => {
    contador += 1;
    atualizarDisplay();
});

btnMenosUm.addEventListener('click', () => {
    contador -= 1;
    atualizarDisplay();
});