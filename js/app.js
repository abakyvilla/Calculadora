// FUNCION PARA BOTON ON/AC
function setear() {
    document.getElementById('display').innerHTML = '0';
}
document.getElementById('on').onclick = setear;



function mostrarenpantalla() {
  document.getElementById('display').innerHTML = '78976532';
}



document.getElementById('7').onclick = mostrarenpantalla;




// Variable Objeto
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

/*
function presionar() {
  document.getElementById('on').style = "width: 10%;"
}
*/

//document.getElementById('on').onclick = presionar;
