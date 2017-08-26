var arreglo1 = [];

// Asignacion de valores al arreglo

var val1 = document.getElementById('1').addEventListener('click', capturar_llenar)
var val2 = document.getElementById('2').addEventListener('click', capturar_llenar2)
var val3 = document.getElementById('3').addEventListener('click', capturar_llenar3)
var val4 = document.getElementById('4').addEventListener('click', capturar_llenar4)
var val5 = document.getElementById('5').addEventListener('click', capturar_llenar5)
var val6 = document.getElementById('6').addEventListener('click', capturar_llenar6)
var val7 = document.getElementById('7').addEventListener('click', capturar_llenar7)
var val8 = document.getElementById('8').addEventListener('click', capturar_llenar8)
var val9 = document.getElementById('9').addEventListener('click', capturar_llenar9)
var val0 = document.getElementById('0').addEventListener('click', capturar_llenar0)
var valp = document.getElementById('punto').addEventListener('click', capturar_llenar_punto)


function capturar_llenar() {
  arreglo1.push(1);
  document.getElementById('display').innerHTML = arreglo1.join('');
}
function capturar_llenar2() {
  arreglo1.push(2);
  document.getElementById('display').innerHTML = arreglo1.join('');
}
function capturar_llenar3() {
  arreglo1.push(3);
  document.getElementById('display').innerHTML = arreglo1.join('');
}
function capturar_llenar4() {
  arreglo1.push(4);
  document.getElementById('display').innerHTML = arreglo1.join('');
}
function capturar_llenar5() {
  arreglo1.push(5);
  document.getElementById('display').innerHTML = arreglo1.join('');
}
function capturar_llenar6() {
  arreglo1.push(6);
  document.getElementById('display').innerHTML = arreglo1.join('');
}
function capturar_llenar7() {
  arreglo1.push(7);
  document.getElementById('display').innerHTML = arreglo1.join('');
}
function capturar_llenar8() {
  arreglo1.push(8);
  document.getElementById('display').innerHTML = arreglo1.join('');
}
function capturar_llenar9() {
  arreglo1.push(9);
  document.getElementById('display').innerHTML = arreglo1.join('');
}
function capturar_llenar0() {
  arreglo1.push(0);
  document.getElementById('display').innerHTML = arreglo1.join('');
}
function capturar_llenar_punto() {
  arreglo1.push('.');
  document.getElementById('display').innerHTML = arreglo1.join('');
}



var calculadora = {

  sumar: function (cant1, cant2) {
    var resultado = cant1 + cant2;
    return (resultado)
  },
  restar: function (cant1, cant2) {
    var resultado = cant1 - cant2;
    return (resultado)
  },
  multiplicar: function (cant1, cant2) {
    var resultado = cant1 * cant2;
    return (resultado)
  },
  dividir: function (cant1, cant2) {
    var resultado = cant1 / cant2;
    return (resultado)
  }
}


/*
// COPIA Variable Objeto
var calculadora = function (cant1, cant2) {
  var resultado = 0;



  function actualizar_resultado (n_resultado) {
    resultado = n_resultado;
  }

  return {
    sumar: function () {
      var resultado = cant1 + cant2;
      actualizar_resultado (resultado)
    },
    restar: function () {
      var resultado = cant1 - cant2;
      actualizar_resultado (resultado)
    },
    multiplicar: function() {
      var resultado = cant1 * cant2;
      actualizar_resultado (resultado)
    },
    dividir: function() {
      var resultado = cant1 / cant2;
      actualizar_resultado (resultado)
    },
    resultado: function () {
      return resultado
    }
  }


}

*/


/*
function presionar() {
  document.getElementById('on').style = "width: 10%;"
}
*/

//document.getElementById('on').onclick = presionar;
