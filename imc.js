
const calcular = document.getElementById('calcular');


function imc () {

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome.value !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo peso.';
        }
        else if (valorIMC < 25) {
            classificacao = 'Com peso ideal. Parabens!!';
        }
        else if (valorIMC < 30){
            classificacao = 'voce esta acima do peso.';
        }
        else if (valorIMC < 35){
            classificacao = 'Com obesidade grau I.';
        }
        else if (valorIMC <40){
            classificacao = 'Com grau de obesidade grau II';
        }
        

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce está ${classificacao}` ;
    }
    else {
        resultado.textContent = ('Preencha todos os campos');
    }

    
    
}

calcular.addEventListener('click', imc);