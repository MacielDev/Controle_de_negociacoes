const campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

// Capturando a tabela
const tabela = document.querySelector('table tbody');


document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();

    //Criando a linha da nova Negociação 
    const tr = document.createElement('tr');

    //Crioando os os campos Data, Quantidade e Valor
    campos.forEach((campo)=>{
        const td =document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    //Criando o volume
    const tdVolume = document.createElement('td');
    tdVolume.textContent =campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    tabela.appendChild(tr);


    //Limpando campos após submeter os formulário e devolvendo o foco no campo data
    campos[0].value = "";
    campos[1].value = "1";
    campos[2].value = "0,00";
    campos[0].focus();
    });





