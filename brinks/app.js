'use script'

function juntarNome (){
    const nome = document.getElementById('nome').value;
    const sobreNome = document.getElementById('sobreNome').value;
    const resultado = document.getElementById('resultado')
    
    certo = parseFloat(nome) + parseFloat(sobreNome);
    nomeCompleto = `O valor da soma é: ${certo}` ;
    console.log(nomeCompleto);

    resultado.textContent = nomeCompleto;
}

document.getElementById('juntar').addEventListener('click', juntarNome)
