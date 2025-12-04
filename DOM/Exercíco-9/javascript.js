const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");
const btnBotao = document.querySelector("#btnBotao");
const resultado = document.getElementById("resultado");


btnBotao.addEventListener("click", () => {
    if (nome.value.trim() === "" || 
        email.value.trim() === "" || 
        mensagem.value.trim() === "") {

        alert("Preencha todos os campos antes de enviar!");
        return;
    }

    resultado.textContent = "Mensagem enviada com sucesso!";
    resultado.style.color = "green";
    
});