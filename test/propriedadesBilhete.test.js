const Bilhete = require('../src/model/Bilhete')

describe('Quantidade de numeros para a aposta', () => {

    test('aposta com 6 numeros', () => {
        bilhete = new Bilhete(1, 6, 4.50); // ID/ numero/ preço
        const numerosApostados = bilhete.getQuantidadeNumerosApostados()
        expect(numerosApostados).toBe(6); 
    });

    test('aposta com 5 numeros', () => {
        bilhete = new Bilhete(1, 5, 4.50); // ID/ numero/ preço
        expect(() => {
            bilhete.getQuantidadeNumerosApostados()
        }).toThrow('jogo invalido');
    });

    test('aposta com 16 numeros', () => {
        bilhete = new Bilhete(1, 16, 4.50); // ID/ numero/ preço
        expect(() => {
            bilhete.getQuantidadeNumerosApostados()
        }).toThrow('jogo invalido');
    });
    
});

describe('Testando propriedades', () => {

    test('get ID', () => {
        bilhete = new Bilhete(1, 6, 4.50); // ID/ numero/ preço
        expect(bilhete.getId()).toBe(1); 
    });

    test('set ID', () => {
        bilhete = new Bilhete(1, 6, 4.50); // ID/ numero/ preço
        bilhete.setId(2)
        expect(bilhete.getId()).toBe(2); 
    });
    test('get preco', () => {
        bilhete = new Bilhete(1, 6, 4.50); // ID/ numero/ preço
        expect(bilhete.getPreco()).toBe(4.50); 
    });

    test('set preco', () => {
        bilhete = new Bilhete(1, 6, 4.50); // ID/ numero/ preço
        bilhete.setPreco(2)
        expect(bilhete.getPreco()).toBe(2); 
    });

    test('set preco < 0', () => {
        bilhete = new Bilhete(1, 6, 4.50); // ID/ numero/ preço
        expect(() => {
            bilhete.setPreco(-1)
        }).toThrow('preco invalido');
    });
    
    test('get preco < 0', () => {
        bilhete = new Bilhete(1, 6, -1); // ID/ numero/ preço
        expect(() => {
            bilhete.getPreco()
        }).toThrow('preco invalido');
    });

    test('get numeros Apostados', () => {
        bilhete = new Bilhete(1, 6, 4.50); // ID/ numero/ preço
        expect(bilhete.getQuantidadeNumerosApostados()).toBe(6); 
    });

    test('set numeros apostados invalido (< 6)', () => {
        bilhete = new Bilhete(1, 6, 4.50); // ID/ numero/ preço
        expect(() => {
            bilhete.setQuantidadeNumerosApostados(5)
        }).toThrow('jogo invalido');
    });

    test('set numeros apostados invalido (> 15)', () => {
        bilhete = new Bilhete(1, 6, 4.50); // ID/ numero/ preço
        expect(() => {
            bilhete.setQuantidadeNumerosApostados(16)
        }).toThrow('jogo invalido');
    });

    test('set numeros apostados valido', () => {
        bilhete = new Bilhete(1, 6, 4.50); // ID/ numero/ preço
        bilhete.setQuantidadeNumerosApostados(7)
        expect(bilhete.getQuantidadeNumerosApostados()).toBe(7); 
    });

    test('set dezenas', () => {
        bilhete = new Bilhete(1, 6, 4.50); // ID/ numero/ preço
        bilhete.setDezenas([1,2,3,4,5,6])
        expect(bilhete.getDezenas()).toStrictEqual([1,2,3,4,5,6]);
    });

    test('get dezenas', () => {
        bilhete = new Bilhete(1, 6, 4.50, [1,2,3,4,5,6]); // ID/ numero/ preço
        expect(bilhete.getDezenas()).toStrictEqual([1,2,3,4,5,6]); 
    });

});