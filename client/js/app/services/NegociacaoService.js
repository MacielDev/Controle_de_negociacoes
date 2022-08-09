class NegociacaoService {

    obterNegociacaoDaSemana() {

        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/semana');

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        reject('Erro: Não foi possível obter negociações da semana no servidor.');
                        console.log(xhr.responseText);
                    }
                }
            }
            xhr.send();

        })
    }

    obterNegociacaoDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/anterior');

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        reject('Erro: Não foi possível obter negociações da semana anterior no servidor.');
                        console.log(xhr.responseText);
                    }
                }
            }
            xhr.send();

        })
    }

    obterNegociacaoDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/retrasada');

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        reject('Erro: Não foi possível obter negociações da semana retrasda no servidor.');
                        console.log(xhr.responseText);
                    }
                }
            }
            xhr.send();

        })
    }
}