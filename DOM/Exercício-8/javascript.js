const menu = document.querySelector("#menu");
const btnBotao = document.querySelector("#btnBotao");

btnBotao.addEventListener('click', () => {
    menu.classList.toggle("fechar");
});