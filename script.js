function calcular() {
    let n = document.getElementById("name").value;
    let i = document.getElementById("idade").value;
    let s = document.getElementById("m").checked;
    let S = document.getElementById("f").checked;
    
    let x = parseFloat(document.getElementById("peso").value);
    let y = parseFloat(document.getElementById("altura").value);
  
     if (!n || !i || (!s && !S) || isNaN(x) || isNaN(y)) {
      alert("Por favor, preencha todos os campos antes de calcular o IMC.");
      return; 
    }
    
    let imc = x / (y * y);
    console.log(imc);
    
    let saida = document.getElementById("sai");
    let saida2 = document.getElementById("sai2");
    let saida3 = document.getElementById("sai3");
    saida3.innerHTML = n + "<br>" + i;
  
    if (s) {
      saida2.innerHTML = "masculino";
    } else if (S) {
      saida2.innerHTML = "feminino";
    }
  
    if (imc < 10 || imc > 100) {
      saida.innerHTML = "IMC inválido. Por favor, verifique os valores inseridos.";
    } else if (imc <= 18.5) {
      saida.innerHTML = "Seu IMC é " + Math.round(imc) + ", você está abaixo do peso normal.";
    } else if (imc < 24.9) {
      saida.innerHTML = "Seu IMC é " + Math.round(imc) + ", você está com peso normal.";
    } else if (imc < 29.9) {
      saida.innerHTML = "Seu IMC é " + Math.round(imc) + ", você está com excesso de peso.";
    } else if (imc < 34.9) {
      saida.innerHTML = "Seu IMC é " + Math.round(imc) + ", você está com obesidade classe I.";
    } else if (imc < 39.9) {
      saida.innerHTML = "Seu IMC é " + Math.round(imc) + ", você está com obesidade classe II.";
    } else if (imc >= 40) {
      saida.innerHTML = "Seu IMC é " + Math.round(imc) + ", você está com obesidade classe III.";
    }
  }
  
  function limpar() {
    document.getElementById("name").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("m").checked = false;
    document.getElementById("f").checked = false;
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("sai3").innerHTML = "";
    document.getElementById("sai2").innerHTML = "";
    document.getElementById("sai").innerHTML = "";
  }
  
  
  