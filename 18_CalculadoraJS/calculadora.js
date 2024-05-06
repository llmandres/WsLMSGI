function suma(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let suma = n1 + n2
    document.getElementById('nResultado').value = suma;
    return suma
}

function resta(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let resta = n1 - n2
    document.getElementById('nResultado').value = resta;
    return resta
}

function multiplicacion(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let multiplicacion = n1 * n2
    document.getElementById('nResultado').value = multiplicacion;
    return multiplicacion
}

function division(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let division = n1 / n2
    if (n2.value == '0'){
        document.getElementById('nResultado').value = "Error Division entre 0"
        
    }else{
    document.getElementById('nResultado').value = division;
    return division
    }
}



