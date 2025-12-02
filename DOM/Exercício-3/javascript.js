const quadrado = document.getElementsByClassName("quadrado");
const bntBotao = document.getElementById("bntBotao");

bntBotao.addEventListener('click', function() {
  for (let item of quadrado){
    item.classList.toggle("highlight");
  }
});