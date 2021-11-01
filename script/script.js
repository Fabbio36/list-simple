function adcionar() {
    
    let text = document.getElementById("texto").value; // o programa vai ler o que esta dentro do input
    let list = document.getElementById("lista").innerHTML; // vai fazer uma modificação nela atraves do innerHTML


    list += "<li>" +text+ "</li>"; // pela list + ela mesma que vai receber os li e concatenou com o text que e o que agente digitou atraves do .value

    document.getElementById("lista").innerHTML = list; // so retornei aqui embaixo, só atribui o list nesse document

    document.getElementById("texto").value = null; // isso vai servir para limpar o input depois de clicar em adcionar
}