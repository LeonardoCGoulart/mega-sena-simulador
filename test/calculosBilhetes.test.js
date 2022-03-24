const Bilhete = require('../src/model/Bilhete')

describe('Vitorias', () => {

    test('ganhou na mega sena!', () => {
        bilhete = new Bilhete(1, 6, 4.50, [1,2,3,4,5,6]); // ID/ numero/ preço / dezenas
        resultadoMegaSena = [1,2,3,4,5,6]
        conferirMegaSena(bilhete.getDezenas, resultadoMegaSena)
        expect(conferirMegaSena).toBe("ganhou na mega sena"); 
    });

    test('acertou a quina!', () => {
        bilhete = new Bilhete(1, 6, 4.50, [1,2,3,4,5,6]); // ID/ numero/ preço / dezenas
        resultadoMegaSena = [1,2,3,4,5,7]
        conferirMegaSena(bilhete.getDezenas, resultadoMegaSena)
        expect(conferirMegaSena).toBe("acertou a quina na mega sena"); 
    });

    test('acertou a quadra!', () => {
        bilhete = new Bilhete(1, 6, 4.50, [1,2,3,4,5,6]); // ID/ numero/ preço / dezenas
        resultadoMegaSena = [1,2,3,4,8,7]
        conferirMegaSena(bilhete.getDezenas, resultadoMegaSena)
        expect(conferirMegaSena).toBe("acertou a quadra na mega sena"); 
    });

    test('nao foi premiado!', () => {
        bilhete = new Bilhete(1, 6, 4.50, [1,2,3,4,5,6]); // ID/ numero/ preço / dezenas
        resultadoMegaSena = [1,2,3,9,8,7]
        conferirMegaSena(bilhete.getDezenas, resultadoMegaSena)
        expect(conferirMegaSena).toBe("nao foi premiado"); 
    });
    
});