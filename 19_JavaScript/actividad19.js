function contadorNumerosPares(){
    let rango = document.getElementById('range').value
    let contador = 0;
    for (let i = 0; i <= rango; i++){
        if(i % 2 === 0){
            contador++
            console.log("Contador numeros pares: " + contador);
            console.log(i);
        }
    }
    document.getElementById('resultadoPares').value = contador;
}
function conversorTemperatura(){
    let valorConvertir = document.getElementById('valorConvertir').value
    let opcion = document.getElementById('conversor').value;
    if(opcion == 'C'){
        let operacionC = (valorConvertir - 32) / 1.8
        console.log("El resultado en Celsius es : " + operacionC + "ºC")
        document.getElementById('resultadoConversor').value = operacionC;
    } else if(opcion == 'F'){
        let operacionF = (valorConvertir * 1.8) + 32;
        console.log("El resultado en Fahrenheit es : " + operacionF)
        document.getElementById('resultadoConversor').value = operacionF;
    }
}
let numeroCorrecto = Math.floor(Math.random()*(10 - 0 + 1)) + 0; 
function numeroRandom(){
    let aleatorioIntroducido = document.getElementById('aleatorioIntroducido').value
    if(aleatorioIntroducido == numeroCorrecto ){
        console.log('Ganaste')
        alert('Ganaste')
        document.getElementById('aleatorioResultado').value = 'Ganaste'
        numeroCorrecto = Math.floor(Math.random()*(10 - 0 + 1)) + 0; 
    }else if(aleatorioIntroducido < numeroCorrecto){
        console.log('Numero muy bajo')
        document.getElementById('aleatorioResultado').value = 'Numero muy bajo'
    } else if(aleatorioIntroducido > numeroCorrecto){
        console.log('Numero muy alto')
        document.getElementById('aleatorioResultado').value = 'Numero muy alto'
    } else if (aleatorioIntroducido >10){
        console.log('Numero fuera de rango')
        document.getElementById('aleatorioResultado').value = 'Numero fuera de rango'
    }else if (aleatorioIntroducido <0){
        console.log('Numero fuera de rango')
        document.getElementById('aleatorioResultado').value = 'Numero fuera de rango'
    }
}
function cambiarColor(){
    let colorHEX = document.getElementById('colorHEX').value
    document.body.style.backgroundColor = colorHEX

}
function login(){
    let user = document.getElementById('user').value
    let password = document.getElementById('pass').value


    if(user == 'goku' && password == 'Vegeta777'){
        resultado = 'Inicio de sesion correcto'
        console.log('Inicio de sesion correcto')
        document.getElementById('loginresultado').value = 'Inicio de sesion correcto'
    }else{
        console.log('Inicio de sesion no valido')
        document.getElementById('loginresultado').value = 'Incorrecto'
    }
}
function esPrimo(){
    let numero = document.getElementById('valorInPrimo').value;
    for(let i = 2; i < numero; i++)
    if (numero < 2) {
        esPrimo = false;
    } else if (numero > 2) {
        for(let i = 2; i < numero; i++) {
            if(numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }
    document.getElementById('esONoPrimo').value = esPrimo ? 'Es primo' : 'No es primo';
}
function fibonacci(){
    let valorN = document.getElementById('valueN').value;
    let controlador1 = 1;
    let numero2 = 1;
    let numero1 = 0;
    let resultado = 1;
    let secuencia = 0
    do	{
        resultado = numero1+numero2;
        console.log("Suma : " + numero1 + " + " + numero2);
        numero1 = numero2;
        numero2 = resultado;
        controlador1++;
        secuencia += ', ' + resultado;
    }while(controlador1< valorN -1);
    document.getElementById('secuencia').value = secuencia

}
