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