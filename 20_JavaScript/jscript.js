let numeros = []
function introducirArray(){
    let valorAIntroducir = document.getElementById('campo1')
    valorAIntroducirInt = parseInt(document.getElementById('campo1').value)
    numeros.push(valorAIntroducirInt)
    console.log(numeros)
}
function hacerMedia(){
    let contador = 0
    console.log(numeros)
    numeros.forEach(element => {
        contador += element
    });
    let media = contador / numeros.length
    document.getElementById('mediaCampo').value = media;

}
let numeros2 = []
function introducirArray2(){
    let valorAIntroducir = document.getElementById('campo2')
    valorAIntroducirInt2 = parseInt(document.getElementById('campo2').value)
    numeros2.push(valorAIntroducirInt2)
    console.log(numeros2)
}
function mayorNumero(){
    let contadorMayor = 0;
    let mayorNumero = 0;
    numeros2.forEach(element => {
        if(element> contadorMayor){
            contadorMayor = element;
            mayorNumero = element;
        }
    });
    document.getElementById('mayorNumero').value = mayorNumero
}
let numeros3 = []
function introducirArray3(){
    let valorAIntroducir = document.getElementById('campo3')
    valorAIntroducirInt3 = parseInt(document.getElementById('campo3').value)
    numeros3.push(valorAIntroducirInt3)
    console.log(numeros3)
}
function ContarPareseImpares(){
    let contadorPares = 0;
    let contadorImpares = 0;
    numeros3.forEach(element => {
        if(element%2 ==  0 ){
            contadorPares++
        }else{
            contadorImpares++
        }
    });
    document.getElementById('pares').value = contadorPares
    document.getElementById('impares').value = contadorImpares

}