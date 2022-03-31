const Bilhete = require('../src/model/Bilhete')
const {conferirMegaSena, sortearResultadoMegaSena, gerarNumeroAleatorio} = require ('../src/controller/calculoBilhete')

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

    test('numeros repetidos com resultado dinamico', () => {
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

        expect(repetido).toBe(false); 

    });

    test('numeros repetidos com resultado estatico', () => {
        const resultado = [1, 2, 2, 3, 4, 5]
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
        expect(repetido).toBe(true); 

    });

    test('inicio > fim', () => {
        const numero = gerarNumeroAleatorio(101,100)
        expect(numero).toBe(101); 

    });
    
});


describe('Adicionar dezenas no seu bilhete', () => {

    test('adicionando dezenas - correto', () => {
        const dezenas = adicionarDezenasAoBilhete([1, 2, 3, 4, 5, 6])

        bilhete = new Bilhete();
        bilhete.setId(1)
        bilhete.setQuantidadeNumerosApostados(6)
        bilhete.setPreco(4.50)
        bilhete.setDezenas()

        expect(bilhete.getDezenas()).toStrictEqual([1,2,3,4,5,6]); 
    });

    test('adicionando dezenas - invalido (numero maior que 60)', () => {
        const dezenas = adicionarDezenasAoBilhete([1, 2, 3, 4, 5, 80])

        expect(() => {
            dezenas
        }).toThrow('dezena invalida');
    });

    test('adicionando dezenas - invalido (numero menor igual a 0)', () => {
        const dezenas = adicionarDezenasAoBilhete([1, 2, 3, 4, -1, 0])

        expect(() => {
            dezenas
        }).toThrow('dezena invalida');
    });
    
});