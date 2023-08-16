function calcularAumentoParaFuncionarios(salario){
    if (salario <= 280) {
        percentual = 0.2;
    } else if (salario <= 700) {
        percentual = 0.15;
    } else if (salario <= 1500) {
        percentual = 0.5;
    }
    return calcularAumento(salario, percentual)
}

function calcularAumento(salario, percentual){
    let aumento = salario * percentual;
    let novosalario = salario + aumento;
    return novosalario
}

function exibirResultadoFuncionario(salarios){
    salarios.forEach(function(salario){
        console.log(calcularAumentoParaFuncionarios(salario));
      });
}

const salarios = [100, 740, 800, 1600, 2000];
exibirResultadoFuncionario(salarios);
