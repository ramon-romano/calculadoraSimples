function calculadoraSimples(num1, num2, ope){
    let resultado = 0;
  
    if(ope === '+'){
      resultado = num1 + num2;
    } else if(ope === '-'){
      resultado = num1 - num2;
    } else if(ope === '*'){
      resultado = num1 * num2;
    }else if(ope === '/'){
      if(num2 === 0){
        return "Não é possivel fazer divisão por 0"
      } else{
        resultado = num1 / num2
      } 
    }
    else{
      return"Informe uma operação valida";
    }
  
    return resultado;
  }
  
  
  console.log(calculadoraSimples(2, 3, '*'))