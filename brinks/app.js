'use script'

function opSoma (){
    const valor1soma = document.getElementById('valor1soma').value;
    const valor2soma = document.getElementById('valor2soma').value;
    const resultado = document.getElementById('resultado')
    
    certo = parseFloat(valor1soma) + parseFloat(valor2soma);
    valorReal = `O valor da soma é: ${certo}` ;
    console.log(valorReal);

    resultado.textContent = valorReal;
}

function opSubtracao(){
    const valor1soma = document.getElementById('valor1soma').value;
    const valor2soma = document.getElementById('valor2soma').value;
    const resultado = document.getElementById('resultado')
    
    certo = parseFloat(valor1soma) - parseFloat(valor2soma);
    valorReal = `O valor da subtracao é: ${certo}` ;
    console.log(valorReal);

    resultado.textContent = valorReal;
}

function opMultiplicacao(){
    const valor1soma = document.getElementById('valor1soma').value;
    const valor2soma = document.getElementById('valor2soma').value;
    const resultado = document.getElementById('resultado')
    
    certo = parseFloat(valor1soma) * parseFloat(valor2soma);
    valorReal = `O valor da multiplicacao é: ${certo}` ;
    console.log(valorReal);

    resultado.textContent = valorReal;
}

function opDivisao(){
    const valor1soma = document.getElementById('valor1soma').value;
    const valor2soma = document.getElementById('valor2soma').value;
    const resultado = document.getElementById('resultado')
    
    certo = parseFloat(valor1soma) / parseFloat(valor2soma);
    valorReal = `O valor da divisao é: ${certo}` ;
    console.log(valorReal);

    resultado.textContent = valorReal;
}

document.getElementById('juntarSoma').addEventListener('click', opSoma);
document.getElementById('juntarSubtracao').addEventListener('click', opSubtracao);
document.getElementById('juntarMultiplicar').addEventListener('click', opMultiplicacao);
document.getElementById('juntarDividir').addEventListener('click', opDivisao)
