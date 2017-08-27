// DECLARACION E INICIALIZACION DE VARIABLES GLOBALES
var arreglo1 = [];
var cant1 = '';
var cant2 = '';
var operacion = '';

// ASIGNACION DE VALORES A LAS TECLAS CORRESPONDIENTES

// 1
document.getElementById('1').addEventListener('click', function () {
  arreglo1.push(1);
  document.getElementById('display').innerHTML = arreglo1.join('');
})

// 2
document.getElementById('2').addEventListener('click', function () {
  arreglo1.push(2);
  document.getElementById('display').innerHTML = arreglo1.join('');
})

// 3
document.getElementById('3').addEventListener('click', function () {
  arreglo1.push(3);
  document.getElementById('display').innerHTML = arreglo1.join('');
})

// 4
document.getElementById('4').addEventListener('click', function () {
  arreglo1.push(4);
  document.getElementById('display').innerHTML = arreglo1.join('');
})

// 5
document.getElementById('5').addEventListener('click', function () {
  arreglo1.push(5);
  document.getElementById('display').innerHTML = arreglo1.join('');
})

// 6
document.getElementById('6').addEventListener('click', function () {
  arreglo1.push(6);
  document.getElementById('display').innerHTML = arreglo1.join('');
})

// 7
document.getElementById('7').addEventListener('click', function () {
  arreglo1.push(7);
  document.getElementById('display').innerHTML = arreglo1.join('');
})

// 8
document.getElementById('8').addEventListener('click', function () {
  arreglo1.push(8);
  document.getElementById('display').innerHTML = arreglo1.join('');
})

// 9
document.getElementById('9').addEventListener('click', function () {
  arreglo1.push(9);
  document.getElementById('display').innerHTML = arreglo1.join('');
})

// 0
document.getElementById('0').addEventListener('click', function () {
  arreglo1.push(0);
  document.getElementById('display').innerHTML = arreglo1.join('');
})

// .
document.getElementById('punto').addEventListener('click', function () {
  arreglo1.push('.');
  document.getElementById('display').innerHTML = arreglo1.join('');
})


// DETERMINAR LA OPERACION MATEMATICA Y ALMACENAR UNA COPIA DEL ARREGLO EN LA VARIABLE CANT1

// SUMA
document.getElementById('mas').addEventListener('click', function() {
  operacion = 'suma';
  cant1 = parseInt(document.getElementById('display').innerHTML); //Mediante Funcion parseInt convertir el string a int
  document.getElementById('display').innerHTML = '0';
  arreglo1 = [];
  console.log('Operacion: ', operacion, 'Primer Valor: ', cant1, 'Nuevo Valor del Arreglo: ', arreglo1);
})

// RESTA
document.getElementById('menos').addEventListener('click', function() {
  operacion = 'resta';
  cant1 = parseInt(document.getElementById('display').innerHTML); //Mediante Funcion parseInt convertir el string a int
  document.getElementById('display').innerHTML = '0';
  arreglo1 = [];
  console.log('Operacion: ', operacion, 'Primer Valor: ', cant1, 'Nuevo Valor del Arreglo: ', arreglo1);
})

// MULTIPLICACION
document.getElementById('por').addEventListener('click', function() {
  operacion = 'multiplicacion';
  cant1 = parseInt(document.getElementById('display').innerHTML); //Mediante Funcion parseInt convertir el string a int
  document.getElementById('display').innerHTML = '0';
  arreglo1 = [];
  console.log('Operacion: ', operacion, 'Primer Valor: ', cant1, 'Nuevo Valor del Arreglo: ', arreglo1);
})

// DIVISION
document.getElementById('dividido').addEventListener('click', function() {
  operacion = 'division';
  cant1 = parseInt(document.getElementById('display').innerHTML); //Mediante Funcion parseInt convertir el string a int
  document.getElementById('display').innerHTML = '0';
  arreglo1 = [];
  console.log('Operacion: ', operacion, 'Primer Valor: ', cant1, 'Nuevo Valor del Arreglo: ', arreglo1);
})

// FUNCIONALIDAD DEL =
document.getElementById('igual').addEventListener('click', function() {
  cant2 = parseInt(document.getElementById('display').innerHTML)
  console.log('cantidad1:', cant1, 'cantidad2:', cant2);
  switch (operacion) {
    case 'suma':
      var result = calculadora.sumar(cant1, cant2);
      document.getElementById('display').innerHTML = result;
      break;
    case 'resta':
      var result = calculadora.restar(cant1, cant2);
      document.getElementById('display').innerHTML = result;
      break;
    case 'multiplicar':
      var result = calculadora.multiplicar(cant1, cant2);
      document.getElementById('display').innerHTML = result;
      break;
    case 'dividir':
      var result = calculadora.dividir(cant1, cant2);
      document.getElementById('display').innerHTML = result;
      break;
  }
})

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
