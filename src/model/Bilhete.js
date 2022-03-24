module.exports = class Bilhete{

    constructor(id, quantidadeNumerosApostados, preco, dezenas){
        this.id = id;
        this.quantidadeNumerosApostados = quantidadeNumerosApostados;
        this.preco = preco
        this.dezenas = dezenas
    }

    getId(){
        return this.id;
    }

    setId(id){
        this.id = id;
    }

    getQuantidadeNumerosApostados(){
        if(this.quantidadeNumerosApostados < 6 || this.quantidadeNumerosApostados > 15){
            throw new Error('jogo invalido')
        }
        return this.quantidadeNumerosApostados;
    }

    setQuantidadeNumerosApostados(quantidadeNumerosApostados){
        if(quantidadeNumerosApostados < 6 || quantidadeNumerosApostados > 15){
            throw new Error('jogo invalido')
        } 
        this.quantidadeNumerosApostados = quantidadeNumerosApostados;
    }

    getPreco(){
        if(this.preco < 0){
            throw new Error('preco invalido')
        }
        return this.preco;
    }

    setPreco(preco){
        if(preco < 0){
            throw new Error('preco invalido')
        } 
        this.preco = preco;
    }

    getDezenas(){
        return this.dezenas;
    }

    setDezenas(dezenas){
        this.dezenas = dezenas;
    }

}