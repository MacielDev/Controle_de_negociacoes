class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const data = this._inputData.value.split('-').map((item,indice)=> item - indice % 2);
        const negociacao = new Negociacao(
            new Date(...data),
            this._inputQuantidade,
            this._inputValor
        );
        console.log(negociacao);
    }
}