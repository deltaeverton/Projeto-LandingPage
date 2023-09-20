var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.documento.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")


function RolarParaDireita() {
    Leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaDireita.style ="display: none"
    setaEsquerda.style ="display: flex; margin-top: 55px"

}
function RolarParaEsquerda() {
    Leonardo.style ="display:flex"
    bruna.style ="display:none"
    setaDireita.style ="display: flex; margin-top: 55px"
    setaEsquerda.style ="display: none"
}