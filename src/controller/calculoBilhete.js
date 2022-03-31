function getQuantidadeAcertos(bilhete, resultado){
    let acertos = 0
    for(let i = 0; i < bilhete.getQuantidadeNumerosApostados(); i++){
        if(bilhete.getDezenas().includes(resultado[i])){
            acertos = acertos + 1
        }
    }
    return acertos
}

function conferirMegaSena(bilhete, resultado){
    let acertos = getQuantidadeAcertos(bilhete, resultado)
    switch(acertos){
        case 4:
            return "acertou a quadra na mega sena"
        case 5:
            return "acertou a quina na mega sena"
        case 6:
            return "ganhou na mega sena"
        default:
            return "nao foi premiado"     
    }
}

function gerarNumeroAleatorio(inicio, fim) {

    resultado =  Math.floor(Math.random() * fim + 0.5); // + 0.5 para retornar o zero caso [0,x]

     while(resultado < inicio){ // não pode ser menor que o inicio
         resultado = Math.floor(Math.random() * fim + 0.5);
     }

     return resultado;
}

function sortearResultadoMegaSena(){
    let resultado = []
    let loop = 0
    let numeroAleatorio = 0

    while(loop < 6){ // são 6 números
        numeroAleatorio = gerarNumeroAleatorio(1,60) // gera um numero aleatorio entre 1 e 60
        if(!resultado.includes(numeroAleatorio) && (numeroAleatorio >= 1 && numeroAleatorio <= 60)){ // numeros validos e sem repetição
            resultado.push(numeroAleatorio) // adiciona no resultado
            loop = loop + 1
        }
    }
    return resultado
}

module.exports = {
    conferirMegaSena,
    sortearResultadoMegaSena,
}