class Negociacao{
    constructor(data, quantidade,valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get volume(){
        return this._quantidade * this._valor;
    }
    // Métodos acessores 
    get data(){
        return new date(this._data.getTime());
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}