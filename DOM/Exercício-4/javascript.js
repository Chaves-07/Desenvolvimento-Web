const valor = document.getElementById("valor");
const bntbotaoIncrementa = document.getElementsById("botaoIncrementa");
const bntbotaoDecrementa = document.getElementsById("botaoDecrementa");

bntbotaoIncrementa.addEventListener('click', function() {
  valor.textContent = parseInt(valor.textContent) + 1;
});

bntbotaoDecrementa.addEventListener('click', function() {
  valor.textContent = parseInt(valor.textContent) - 1;
});