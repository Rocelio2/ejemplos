// true = usa ventanas alert() reales (son ~70). false = muestra los mensajes en la consola (F12).
var USAR_ALERT = false;

var alertOriginal = window.alert;
window.alert = function(mensaje) {
  if (USAR_ALERT) {
    alertOriginal(mensaje);
  } else {
    console.log("  alert -> " + mensaje);
  }
};

// Ejecuta cada listado aislado; si uno da error (como el 6-52) los demás siguen.
function ejecutar(nombre, funcion) {
  console.log("\nListado " + nombre);
  try {
    funcion();
  } catch (e) {
    console.error("Listado " + nombre + ":", e.message);
  }
}

// ==================== 6.2 Funciones ====================

// Listado 6-50: Declarando funciones
function l6_50() {
  function mostrarMensaje() {
    alert("Soy una función");
  }

  mostrarMensaje();
}

// Listado 6-51: Procesando datos con funciones
function l6_51() {
  var total = 5;
  function calcularValores() {
    total = total * 2;
  }
  for (var f = 0; f < 10; f++) {
    calcularValores();
  }
  alert("El total es: " + total);   // "El total es: 5120"
}

// Listado 6-52: Declarando variables globales y locales
function l6_52() {
  var variableGlobal = 5;
  function miFuncion() {
    var variableLocal = "El valor es ";
    alert(variableLocal + variableGlobal);   // "El valor es 5"
  }
  miFuncion();
  alert(variableLocal);   // Error: variableLocal no existe fuera de la función (revisa la consola)
}

// Listado 6-53: Declarando dos variables con el mismo nombre
function l6_53() {
  var miVariable = 5;
  function miFuncion() {
    var miVariable = "Esta es una variable local";
    alert(miVariable);   // "Esta es una variable local"
  }
  miFuncion();
  alert(miVariable);     // 5
}

// Listado 6-54: Enviando un valor a una función
function l6_54() {
  function miFuncion(valor) {
    alert(valor);
  }
  miFuncion(5);
}

// Listado 6-55: Llamando a la misma función con diferentes valores
function l6_55() {
  function miFuncion(valor) {
    alert(valor);
  }
  miFuncion(5);
  miFuncion(25);
}

// Listado 6-56: Enviando el valor de una variable a una función
function l6_56() {
  var contador = 100;
  function miFuncion(valor) {
    alert(valor);
  }
  miFuncion(contador);
}

// Listado 6-57: Enviando múltiples valores a una función
function l6_57() {
  var contador = 100;
  var items = 5;

  function miFuncion(valor1, valor2) {
    var total = valor1 + valor2;
    alert(total);   // 105
  }

  miFuncion(contador, items);
}

// Listado 6-58: Devolviendo valores desde funciones
function l6_58() {
  var contador = 100;
  var items = 5;
  function miFuncion(valor1, valor2) {
    var total = valor1 + valor2;
    return total;
  }
  var resultado = miFuncion(contador, items);
  alert(resultado);   // 105
}

// Listado 6-59: Devolviendo diferentes valores desde una función
function l6_59() {
  var contador = 100;
  var items = 5;
  function miFuncion(valor1, valor2) {
    var total = valor1 + valor2;
    if (total > 100) {
      return total;
    } else {
      return 0;
    }
  }
  var resultado = miFuncion(contador, items);
  alert(resultado);   // 105
}

// Listado 6-60: Declarando funciones anónimas
function l6_60() {
  var miFuncion = function(valor) {
    valor = valor * 2;
    return valor;
  };
  var total = 2;
  for (var f = 0; f < 10; f++) {
    total = miFuncion(total);
  }
  alert("El total es " + total);   // "El total es 2048"
}

// Listado 6-61: Ejecutando funciones anónimas
function l6_61() {
  var miValor = function(valor) {
    valor = valor * 2;
    return valor;
  }(35);
  alert("El valor es " + miValor);   // "El valor es 70"
}

// Listado 6-62: Comprobando si un valor es un número o no
function l6_62() {
  var miValor = "Hola";
  if (isNaN(miValor)) {
    alert(miValor + " no es un número");
  } else {
    alert(miValor + " es un número");
  }
}

// Listado 6-63: Convirtiendo una cadena de caracteres en un número
function l6_63() {
  var miValor = "32";
  if (isNaN(miValor)) {
    alert(miValor + " no es un número");
  } else {
    var numero = parseInt(miValor);
    numero = numero * 10;
    alert("El número es: " + numero);   // "El número es: 320"
  }
}

// Listado 6-64: Codificando una cadena de caracteres para incluirla en una URL
function l6_64() {
  var nombre = "Juan Perez";
  var codificado = encodeURIComponent(nombre);
  var miURL = "http://www.ejemplo.com/contacto.html?nombre=" + codificado;
  alert(miURL);   // http://www.ejemplo.com/contacto.html?nombre=Juan%20Perez
}


// ==================== 6.3 Objetos ====================

// Listado 6-65: Creando objetos
function l6_65() {
  var miObjeto = {
    nombre: "Juan",
    edad: 30
  };
}

// Listado 6-66: Accediendo propiedades
function l6_66() {
  var miObjeto = {
    nombre: "Juan",
    edad: 30
  };
  var mensaje = "Mi nombre es " + miObjeto.nombre + "\r\n";
  mensaje += "Tengo " + miObjeto["edad"] + " años";
  alert(mensaje);
}

// Listado 6-67: Accediendo propiedades usando variables
function l6_67() {
  var nombrePropiedad = "nombre";
  var miObjeto = {
    nombre: "Juan",
    edad: 30
  };
  alert(miObjeto[nombrePropiedad]);   // "Juan"
}

// Listado 6-68: Accediendo propiedades con nombres no válidos
function l6_68() {
  var miVariable = "nombre";
  var miObjeto = {
    nombre: "Juan",
    'mi edad': 30
  };
  alert(miObjeto['mi edad']);   // 30
}

// Listado 6-69: Actualizando valores y agregando nuevas propiedades a un objeto
function l6_69() {
  var miObjeto = {
    nombre: "Juan",
    edad: 30
  };
  miObjeto.nombre = "Martín";
  miObjeto.trabajo = "Programador";
  alert(miObjeto.nombre + " " + miObjeto.edad + " " + miObjeto.trabajo);
}

// Listado 6-70: Creando objetos dentro de objetos
function l6_70() {
  var miObjeto = {
    nombre: "Juan",
    edad: 30,
    motocicleta: {
      modelo: "Susuki",
      fecha: 1961
    }
  };
  alert(miObjeto.nombre + " tiene una " + miObjeto.motocicleta.modelo);
}

// Listado 6-71: Declarando y ejecutando métodos
function l6_71() {
  var miObjeto = {
    nombre: "Juan",
    edad: 30,
    mostrarDatos: function() {
      var mensaje = "Nombre: " + miObjeto.nombre + "\r\n";
      mensaje += "Edad: " + miObjeto.edad;
      alert(mensaje);
    },
    cambiarNombre: function(nombreNuevo) {
      miObjeto.nombre = nombreNuevo;
    }
  };
  miObjeto.mostrarDatos();          // "Nombre: Juan  Edad: 30"
  miObjeto.cambiarNombre("José");
  miObjeto.mostrarDatos();          // "Nombre: José  Edad: 30"
}

// Listado 6-72: Devolviendo valores desde métodos
function l6_72() {
  var miObjeto = {
    nombre: "Juan",
    edad: 30,
    mostrarDatos: function() {
      var mensaje = "Nombre: " + miObjeto.nombre + "\r\n";
      mensaje += "Edad: " + miObjeto.edad;
      alert(mensaje);
    },
    cambiarNombre: function(nombreNuevo) {
      var nombreViejo = miObjeto.nombre;
      miObjeto.nombre = nombreNuevo;
      return nombreViejo;
    }
  };
  var anterior = miObjeto.cambiarNombre("José");
  alert("El nombre anterior era: " + anterior);   // "Juan"
}

// Listado 6-73: Referenciando las propiedades del objeto con la palabra clave this
function l6_73() {
  var miObjeto = {
    nombre: "Juan",
    edad: 30,
    mostrarDatos: function() {
      var mensaje = "Nombre: " + this.nombre + "\r\n";
      mensaje += "Edad: " + this.edad;
      alert(mensaje);
    },
    cambiarNombre: function(nombreNuevo) {
      var nombreViejo = this.nombre;
      this.nombre = nombreNuevo;
      return nombreViejo;
    }
  };

  var anterior = miObjeto.cambiarNombre("José");
  alert("El nombre anterior era: " + anterior);   // "Juan"
}

// Listado 6-74: Usando un constructor para crear un objeto
function l6_74() {
  var constructor = function() {
    var obj = {
      nombre: "Juan",
      edad: 30,
      mostrarNombre: function() {
        alert(this.nombre);
      },
      cambiarNombre: function(nombreNuevo) {
        this.nombre = nombreNuevo;
      }
    };
    return obj;
  };
  var empleado = constructor();
  empleado.mostrarNombre();   // "Juan"
}

// Listado 6-75: Enviando valores iniciales al constructor
function l6_75() {
  var constructor = function(nombreInicial) {
    var obj = {
      nombre: nombreInicial,
      edad: 30,
      mostrarNombre: function() {
        alert(this.nombre);
      },
      cambiarNombre: function(nombreNuevo) {
        this.nombre = nombreNuevo;
      }
    };
    return obj;
  };
  var empleado = constructor("Juan");
  empleado.mostrarNombre();   // "Juan"
}

// Listado 6-76: Usando constructores para crear múltiples objetos
function l6_76() {
  var constructor = function(nombreInicial) {
    var obj = {
      nombre: nombreInicial,
      edad: 30,
      mostrarNombre: function() {
        alert(this.nombre);
      },
      cambiarNombre: function(nombreNuevo) {
        this.nombre = nombreNuevo;
      }
    };
    return obj;
  };
  var empleado1 = constructor("Juan");
  var empleado2 = constructor("Roberto");
  var empleado3 = constructor("Arturo");
  alert(empleado1.nombre + ", " + empleado2.nombre + ", " + empleado3.nombre);
  // "Juan, Roberto, Arturo"
}

// Listado 6-77: Definiendo propiedades privadas (closure)
function l6_77() {
  var constructor = function() {
    var nombre = "Juan";
    var edad = 30;
    var obj = {
      mostrarNombre: function() {
        alert(nombre);
      },
      cambiarNombre: function(nombreNuevo) {
        nombre = nombreNuevo;
      }
    };
    return obj;
  };
  var empleado = constructor();
  empleado.mostrarNombre();   // "Juan"
}

// Listado 6-78: Creando objetos con el operador new
function l6_78() {
  function MiObjeto() {
    this.nombre = "Juan";
    this.edad = 30;
    this.mostrarNombre = function() {
      alert(this.nombre);
    };
    this.cambiarNombre = function(nombreNuevo) {
      this.nombre = nombreNuevo;
    };
  }
  var empleado = new MiObjeto();
  empleado.mostrarNombre();   // "Juan"
}

// Listado 6-79: Definiendo valores iniciales para el objeto
function l6_79() {
  function MiObjeto(nombreInicial, edadInicial) {
    this.nombre = nombreInicial;
    this.edad = edadInicial;
    this.mostrarNombre = function() {
      alert(this.nombre);
    };
    this.cambiarNombre = function(nombreNuevo) {
      this.nombre = nombreNuevo;
    };
  }
  var empleado = new MiObjeto("Roberto", 55);
  empleado.mostrarNombre();   // "Roberto"
}

// Listado 6-80: Creando objetos a partir de otros objetos
function l6_80() {
  var miObjeto = {
    nombre: "Juan",
    edad: 30,
    mostrarNombre: function() {
      alert(this.nombre);
    },
    cambiarNombre: function(nombreNuevo) {
      this.nombre = nombreNuevo;
    }
  };
  var empleado = Object.create(miObjeto);
  empleado.cambiarNombre("Roberto");
  empleado.mostrarNombre();    // "Roberto"
  miObjeto.mostrarNombre();    // "Juan"
}

// Listado 6-81: Agregando un nuevo método al prototipo
function l6_81() {
  var miObjeto = {
    nombre: "Juan",
    edad: 30,
    mostrarNombre: function() {
      alert(this.nombre);
    },
    cambiarNombre: function(nombreNuevo) {
      this.nombre = nombreNuevo;
    }
  };
  var empleado = Object.create(miObjeto);
  empleado.edad = 24;

  miObjeto.mostrarEdad = function() {
    alert(this.edad);
  };

  empleado.mostrarEdad();   // 24
}

// Listado 6-82: Probando la cadena de prototipos
function l6_82() {
  var miObjeto = {
    nombre: "Juan",
    edad: 30,
    mostrarNombre: function() {
      alert(this.nombre);
    },
    cambiarNombre: function(nombreNuevo) {
      this.nombre = nombreNuevo;
    }
  };
  var empleado1 = Object.create(miObjeto);
  var empleado2 = Object.create(empleado1);
  var empleado3 = Object.create(empleado2);

  empleado2.mostrarEdad = function() {
    alert(this.edad);
  };

  empleado3.edad = 24;
  empleado3.mostrarEdad();   // 24
}


// ==================== 6.4 Objetos estándar ====================

// Listado 6-83: Creando números con un constructor
function l6_83() {
  var valor = new Number(5);
  alert(valor);   // 5
}

// Listado 6-84: Creando números a partir de cadenas de caracteres
function l6_84() {
  var valor = new Number("5");
  alert(valor);   // 5
}

// Listado 6-85: Realizando operaciones aritméticas con objetos
function l6_85() {
  var valor = new Number("5");
  var total = valor * 35;
  alert(total);   // 175
}

// Listado 6-86: Creando un array con un constructor
function l6_86() {
  var lista = new Array(12, 35, 57, 8);
  alert(lista);   // 12,35,57,8
}

// Listado 6-87: Creando un array vacío con un constructor
function l6_87() {
  var lista = new Array(2);
  alert(lista[0] + " — " + lista[1]);   // undefined — undefined
}

// Listado 6-88: Contando la cantidad de caracteres en una cadena
function l6_88() {
  var texto = "Hola Mundo";
  var mensaje = "El texto tiene " + texto.length + " caracteres";
  alert(mensaje);   // "El texto tiene 10 caracteres"
}

// Listado 6-89: Iterando sobre los caracteres de una cadena
function l6_89() {
  var texto = "Hola Mundo";
  var mensaje = "";
  for (var f = 0; f < texto.length; f++) {
    mensaje += texto[f] + " ";
  }
  alert(mensaje);   // "H o l a   M u n d o "
}

// Listado 6-90: Removiendo espacios
function l6_90() {
  var texto = "Hola Mundo";
  var mensaje = "";
  for (var f = 0; f < texto.length; f++) {
    mensaje += texto[f] + " ";
  }
  mensaje = mensaje.trim();
  alert(mensaje);   // "H o l a   M u n d o"
}

// Listado 6-91: Procesando una cadena de caracteres
function l6_91() {
  var texto = "Hola Mundo";
  var mensaje = "";
  var anterior = "";

  for (var f = 0; f < texto.length; f++) {
    if (mensaje != "") {
      anterior = texto[f - 1];
      if (anterior != " " && texto[f] != " ") {
        mensaje += ".";
      }
    }
    mensaje += texto[f];
  }
  alert(mensaje);   // "H.o.l.a M.u.n.d.o"
}

// Listado 6-92: Convirtiendo los caracteres de una cadena en letras mayúsculas
function l6_92() {
  var texto = "Hola Mundo";
  var mensaje = texto.toUpperCase();
  alert(mensaje);   // "HOLA MUNDO"
}

// Listado 6-93: Copiando un grupo de caracteres
function l6_93() {
  var texto = "Hola Mundo";
  var palabra = texto.substr(0, 4);
  alert(palabra);   // "Hola"
}

// Listado 6-94: Copiando todos los caracteres desde un índice hasta el final de la cadena
function l6_94() {
  var texto = "Hola Mundo";
  var palabra = texto.substr(5);
  alert(palabra);   // "Mundo"
}

// Listado 6-95: Referenciando caracteres con índices negativos
function l6_95() {
  var texto = "Hola Mundo";
  var palabra = texto.substr(-5);
  alert(palabra);   // "Mundo"
}

// Listado 6-96: Copiando caracteres entre dos índices
function l6_96() {
  var texto = "Hola Mundo";
  var palabra = texto.substring(5, 7);
  alert(palabra);   // "Mu"
}

// Listado 6-97: Obteniendo las palabras de una cadena
function l6_97() {
  var texto = "Hola Mundo";
  var palabras = texto.split(" ");
  alert(palabras[0] + " / " + palabras[1]);   // "Hola / Mundo"
}

// Listado 6-98: Buscando un texto al comienzo de la cadena
function l6_98() {
  var texto = "Hola Mundo";
  if (texto.startsWith("Ho")) {
    alert("El texto comienza con 'Ho'");
  }
}

// Listado 6-99: Buscando un texto dentro de otro texto
function l6_99() {
  var texto = "Hola Mundo";
  if (texto.includes("l")) {
    alert("El texto incluye la letra L");
  }
}

// Listado 6-100: Encontrando la ubicación de un texto dentro de una cadena de caracteres
function l6_100() {
  var texto = "Hola Mundo";
  var indice = texto.indexOf("Mundo");
  alert("La palabra comienza en el índice " + indice);   // 5
}

// Listado 6-101: Reemplazando textos en una cadena de caracteres
function l6_101() {
  var texto = "Hola Mundo";
  var textoNuevo = texto.replace("Mundo", "Planeta");
  alert(textoNuevo);   // "Hola Planeta"
}

// ==================== EJECUCIÓN ====================
// Comenta las líneas de los listados que no quieras correr.
window.addEventListener("load", function() {

  // 6.2 Funciones
  ejecutar('6-50', l6_50);
  ejecutar('6-51', l6_51);
  ejecutar('6-52', l6_52);
  ejecutar('6-53', l6_53);
  ejecutar('6-54', l6_54);
  ejecutar('6-55', l6_55);
  ejecutar('6-56', l6_56);
  ejecutar('6-57', l6_57);
  ejecutar('6-58', l6_58);
  ejecutar('6-59', l6_59);
  ejecutar('6-60', l6_60);
  ejecutar('6-61', l6_61);
  ejecutar('6-62', l6_62);
  ejecutar('6-63', l6_63);
  ejecutar('6-64', l6_64);

  // 6.3 Objetos
  ejecutar('6-65', l6_65);
  ejecutar('6-66', l6_66);
  ejecutar('6-67', l6_67);
  ejecutar('6-68', l6_68);
  ejecutar('6-69', l6_69);
  ejecutar('6-70', l6_70);
  ejecutar('6-71', l6_71);
  ejecutar('6-72', l6_72);
  ejecutar('6-73', l6_73);
  ejecutar('6-74', l6_74);
  ejecutar('6-75', l6_75);
  ejecutar('6-76', l6_76);
  ejecutar('6-77', l6_77);
  ejecutar('6-78', l6_78);
  ejecutar('6-79', l6_79);
  ejecutar('6-80', l6_80);
  ejecutar('6-81', l6_81);
  ejecutar('6-82', l6_82);

  // 6.4 Objetos estándar
  ejecutar('6-83', l6_83);
  ejecutar('6-84', l6_84);
  ejecutar('6-85', l6_85);
  ejecutar('6-86', l6_86);
  ejecutar('6-87', l6_87);
  ejecutar('6-88', l6_88);
  ejecutar('6-89', l6_89);
  ejecutar('6-90', l6_90);
  ejecutar('6-91', l6_91);
  ejecutar('6-92', l6_92);
  ejecutar('6-93', l6_93);
  ejecutar('6-94', l6_94);
  ejecutar('6-95', l6_95);
  ejecutar('6-96', l6_96);
  ejecutar('6-97', l6_97);
  ejecutar('6-98', l6_98);
  ejecutar('6-99', l6_99);
  ejecutar('6-100', l6_100);
  ejecutar('6-101', l6_101);
});
