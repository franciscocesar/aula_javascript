
//var nome = "Francisco César";
//var idade = 29;
//var idade2 = 10;
//var frase = "Brasil é melhor que japão"


//console.log(nome)
//console.log(idade + idade2)
//console.log(frase.replace("Brasil, Japão"))
//console.log(frase.toUpperCase())


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop()
//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(" - "))

//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta.nome)

//var fruta = [{nome:"maça", cor = "vermelha"}, {nome:"laranja", cor = "laranja"}];
//console.log(fruta);

/*var idade = prompt("Qual sua idade? ")
if (idade >= 18){
    alert("VC TÉ MAIOR DE IDADE ")
}else{
    alert("Menor de idade")
} */

/*var count = 0
while (count < 5){
    console.log(count);
    alert(count)
    count++
}*/

/*var count
for(cont = 0; count <= 5; count++){
    alert(count);
};*/

/*var d = new Date();
alert(d)*/

/*function soma (n1, n2){
    return n1 + n2;
}*/

//alert(soma(5, 10))

/* function setReplace(frase, nome, novonome){
     return frase.replace(nome, novonome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"))*/

/*function validaIdade(idade){
    var validade 
    if (idade >= 18){
        validade = true
    }else{
        validade = false
    }
    return validade
}

var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade))*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por cliclar"
}
function redirecionar(){
    window.open("https://discord.com/channels/690786716302442556/690786716302442559");
    window.location.href("https://discord.com/channels/690786716302442556/690786716302442559")
}
function mouse(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por passar"

}
function voltar () {
    document.getElementById("agradecimento").innerHTML = "Voltou"
}
function load(){
    alert("página caregada")
}