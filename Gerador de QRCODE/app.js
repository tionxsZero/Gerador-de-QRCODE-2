var texto = document.getElementById("input-url");
var imagem = document.getElementById("img-container");
var botao = document.getElementById("gerar-qrcode");
var limpar = document.getElementById("limpar");
var jsonData;


botao.addEventListener("click", verificarTexto);

function verificarTexto(){
    event.preventDefault();

    if(texto.value === null || texto.value == undefined || texto.value ===''){
        alert("Verifique a URL digitada");
        return;
    }
    

    gerarQr();

}

limpar.addEventListener("click", limparTudo)

function limparTudo()
{
    imagem.src = "https://via.placeholder.com/500";
}

async function gerarQr (){

imagem.src = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${texto.value}`;   

}
