const Bilhete = require('../src/model/Bilhete')
const {conferirMegaSena} = require ('../src/controller/calculoBilhete')

describe('Verificação dos resultados', () => {

    test('ganhou na mega sena!', () => {
        bilhete = new Bilhete(1, 6, 4.50, [1,2,3,4,5,6]); // ID/ numero/ preço / dezenas
        resultadoMegaSena = [1,2,3,4,5,6]
        expect(conferirMegaSena(bilhete, resultadoMegaSena)).toBe("ganhou na mega sena"); 
    });

    test('acertou a quina!', () => {
        bilhete = new Bilhete(1, 6, 4.50, [1,2,3,4,5,6]); // ID/ numero/ preço / dezenas
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