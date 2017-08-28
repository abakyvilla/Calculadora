// DECLARACION E INICIALIZACION DE VARIABLES GLOBALES
var arreglo1 = [];
var cant1 = '';
var cant2 = '';
var operacion = '';

// ASIGNACION DE VALORES A LAS TECLAS CORRESPONDIENTES

// 1
document.getElementById('1').addEventListener('click', function () {
  arreglo1.push(1);
  document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8); // JOIN() elimina la coma al momento de mostrar el array

})

// 2
document.getElementById('2').addEventListener('click', function () {
  arreglo1.push(2);
  document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
})

// 3
document.getElementById('3').addEventListener('click', function () {
  arreglo1.push(3);
  document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
})

// 4
document.getElementById('4').addEventListener('click', function () {
  arreglo1.push(4);
  document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
})

// 5
document.getElementById('5').addEventListener('click', function () {
  arreglo1.push(5);
  document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
})

// 6
document.getElementById('6').addEventListener('click', function () {
  arreglo1.push(6);
  document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
})

// 7
document.getElementById('7').addEventListener('click', function () {
  arreglo1.push(7);
  document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
})

// 8
document.getElementById('8').addEventListener('click', function () {
  arreglo1.push(8);
  document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
})

// 9
document.getElementById('9').addEventListener('click', function () {
  arreglo1.push(9);
  document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
})

// 0
document.getElementById('0').addEventListener('click', function () {
  if (document.getElementById('display').innerHTML !== '0') {
    arreglo1.push(0);
    document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
  }
})

// .
document.getElementById('punto').addEventListener('click', function () {

  //  COMPROBACION SI . EXISTE EN EL ARRAY //////////////
  var existe_punto = arreglo1.includes('.'); // FUNCION INCLUDES() COMPRUEBA SI EXISTE EL ELEMENTO DENTRO DEL PARENTESIS EN EL ARRAY (ARREGLO1)
  //console.log('Existe Punto:', existe_punto);


  if (document.getElementById('display').innerHTML == '0') {
    arreglo1.push('0');
    arreglo1.push('.');
    document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
  } else if (existe_punto == false) {
    arreglo1.push('.');
    document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
  } else {
    document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
  }

})

// -/+
document.getElementById('sign').addEventListener('click', function () {
  if (document.getElementById('display').innerHTML == '0') {
    document.getElementById('display').innerHTML = '0';
  } else if (arreglo1[0] == '-') {
    arreglo1.shift(); // ELIMINA EL PRIMER ELEMENTO DEL ARRAY
    document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
  } else {
    arreglo1.unshift('-'); // AÑADE EL ELEMENTO AL PRINCIPIO DEL ARRAY
    document.getElementById('display').innerHTML = arreglo1.join('').substring(0, 8);
  }

})


// DETERMINAR LA OPERACION MATEMATICA Y ALMACENAR UNA COPIA DEL ARREGLO EN LA VARIABLE CANT1

// SUMA
document.getElementById('mas').addEventListener('click', function() {
  operacion = 'suma';
  cant1 = parseFloat(document.getElementById('display').innerHTML); //Mediante Funcion parseFloat convertir el string a int
  document.getElementById('display').innerHTML = '0';
  arreglo1 = [];
  //console.log('Operacion: ', operacion, 'Primer Valor: ', cant1, 'Nuevo Valor del Arreglo: ', arreglo1);
})

// RESTA
document.getElementById('menos').addEventListener('click', function() {
  operacion = 'resta';
  cant1 = parseFloat(document.getElementById('display').innerHTML); //Mediante Funcion parseFloat convertir el string a int
  document.getElementById('display').innerHTML = '0';
  arreglo1 = [];
  //console.log('Operacion: ', operacion, 'Primer Valor: ', cant1, 'Nuevo Valor del Arreglo: ', arreglo1);
})

// MULTIPLICACION
document.getElementById('por').addEventListener('click', function() {
  operacion = 'multiplicacion';
  cant1 = parseFloat(document.getElementById('display').innerHTML); //Mediante Funcion parseFloat convertir el string a int
  document.getElementById('display').innerHTML = '0';
  arreglo1 = [];
  //console.log('Operacion: ', operacion, 'Primer Valor: ', cant1, 'Nuevo Valor del Arreglo: ', arreglo1);
})

// DIVISION
document.getElementById('dividido').addEventListener('click', function() {
  operacion = 'division';
  cant1 = parseFloat(document.getElementById('display').innerHTML); //Mediante Funcion parseFloat convertir el string a int
  document.getElementById('display').innerHTML = '0';
  arreglo1 = [];
  //console.log('Operacion: ', operacion, 'Primer Valor: ', cant1, 'Nuevo Valor del Arreglo: ', arreglo1);
})

// FUNCIONALIDAD DEL ON/C
document.getElementById('on').addEventListener('click', function() {
  arreglo1 = [];
  cant1 = '';
  cant2 = '';
  operacion = '';
  document.getElementById('display').innerHTML = '0';
})

// FUNCIONALIDAD DEL =
document.getElementById('igual').addEventListener('click', function() {
  cant2 = parseFloat(document.getElementById('display').innerHTML)
  //console.log('cantidad1:', cant1, 'cantidad2:', cant2);
  switch (operacion) {
    case 'suma':
      var result = calculadora.sumar(cant1, cant2);
      var mostrar_result = result.toString();
      document.getElementById('display').innerHTML = mostrar_result.substring(0, 8);
      break;
    case 'resta':
      var result = calculadora.restar(cant1, cant2);
      var mostrar_result = result.toString();
      document.getElementById('display').innerHTML = mostrar_result.substring(0, 8);
      break;
    case 'multiplicacion':
      var result = calculadora.multiplicar(cant1, cant2);
      var mostrar_result = result.toString();
      document.getElementById('display').innerHTML = mostrar_result.substring(0, 8);
      break;
    case 'division':
      var result = calculadora.dividir(cant1, cant2);
      var mostrar_result = result.toString();
      document.getElementById('display').innerHTML = mostrar_result.substring(0, 8);
      break;
  }
})

// VARIABLE OBJETO Y SUS RESPECTIVOS METODOS
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
