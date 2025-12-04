const quadrado = document.getElementsByClassName("quadrado");
const btnBotao = document.getElementById("btnBotao");

btnBotao.addEventListener('click', function() {
  for (let item of quadrado){
    item.classList.toggle("highlight");
  }
});