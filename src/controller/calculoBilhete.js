function getQuantidadeAcertos(bilhete, resultado){
    let acertos = 0
    for(let i = 0; i < bilhete.getQuantidadeNumerosApostados(); i++){
        if(bilhete.getDezenas()[i] == resultado[i]){
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

module.exports = {
    conferirMegaSena,
}