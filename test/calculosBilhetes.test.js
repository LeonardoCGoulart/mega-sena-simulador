const Bilhete = require('../src/model/Bilhete')
const {conferirMegaSena} = require ('../src/controller/calculoBilhete')

describe('Verificação dos resultados', () => {

    test('ganhou na mega sena!', () => {
        bilhete = new Bilhete(1, 6, 4.50, [1,2,3,4,5,6]); // ID/ numero/ preço / dezenas
        resultadoMegaSena = [1,2,3,4,5,6]
        expect(conferirMegaSena(bilhete, resultadoMegaSena)).toBe("ganhou na mega sena"); 
    });

    test('acertou a quina!', () => {
        bilhete = new Bilhete(1, 6, 4.50, [1,3,2,4,5,6]); // ID/ numero/ preço / dezenas
        resultadoMegaSena = [1,2,3,4,5,7]
        expect(conferirMegaSena(bilhete, resultadoMegaSena)).toBe("acertou a quina na mega sena"); 
    });

    test('acertou a quadra!', () => {
        bilhete = new Bilhete(1, 6, 4.50, [1,2,3,4,5,6]); // ID/ numero/ preço / dezenas
        resultadoMegaSena = [1,2,3,4,8,7]
        expect(conferirMegaSena(bilhete, resultadoMegaSena)).toBe("acertou a quadra na mega sena"); 
    });

    test('nao foi premiado!', () => {
        bilhete = new Bilhete(1, 6, 4.50, [1,2,3,4,5,6]); // ID/ numero/ preço / dezenas
        resultadoMegaSena = [1,2,3,9,8,7]
        expect(conferirMegaSena(bilhete, resultadoMegaSena)).toBe("nao foi premiado"); 
    });
    
});

describe('Gerar sorteio do resultado da mega sena', () => {

    test('quantidade de dezenas', () => {
        const resultado = sortearResultadoMegaSena()
        expect(resultado.length).toBe(6); 
    });

    test('numeros repetidos', () => {
        const resultado = sortearResultadoMegaSena()
        const resultado2 = resultado
        let repetido = false
        let quantidadeEncontrado = 0

        for(let i = 0; i < resultado.length; i++){
            for(let j = 0; j < resultado.length; j++){
                if(resultado[i] == resultado2[j]){
                    quantidadeEncontrado = quantidadeEncontrado + 1
                }
            }
            if(quantidadeEncontrado >= 2){
                repetido = true
                break
            }
            quantidadeEncontrado = 0
        }

    });
    
});