function ProximaIMG(){
cont ++
if(cont > 3){
    cont = 1
}
document.getElementById('radio' + cont).checked = true
}

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true //quando abrir a pagina, marcar o primeiro input automaticamente

setInterval(() => { //definir o tempo de cada imagem
    ProximaIMG()
}, 3000) //5 segundos
function abre(){ //abrir o menu
    let menu = document.querySelector('.menu')
    menu.style.width = '10%' //abre até 30% da pagina
}
function fecha(){ //fecha o menu
    let menu = document.querySelector('.menu')
    menu.style.width = '0' //fecha o menu
}
