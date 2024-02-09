function CalcularIMC()
{


    var kg= document.getElementById("kilos").value
   
    var altura = document.getElementById("altura").value
    var imcvalue =kg / ( altura * altura)

   console.log(kg)
   var value = "a";
    if(imcvalue <= 16.9)
    document.getElementById("imc").innerHTML = `IMC  :  Muito Abaixo do peso`
    else if(imcvalue >= 17 && imcvalue <=18.4)
    document.getElementById("imc").innerHTML = `IMC  : Abaixo do peso`
    else if(imcvalue >= 18.5 && imcvalue <=24.9)
    document.getElementById("imc").innerHTML = `IMC  : Peso normal`
    else if(imcvalue >= 25 && imcvalue <=29.9)
    document.getElementById("imc").innerHTML = `IMC  : Acima do peso`
    else if(imcvalue >= 30 && imcvalue <=34.9)
    document.getElementById("imc").innerHTML = `IMC  : Obesidade Grau 1 `
    else if(imcvalue >= 35 && imcvalue <=40)
    document.getElementById("imc").innerHTML = `IMC  : Obesidade Grau 2`
    else if (imcvalue >40)
    document.getElementById("imc").innerHTML = `IMC  : Obesidade Grau 3`
  
}