"use strict";

// Contenido editable del prototipo. Cada grupo de claves recoge formas de preguntar.
const respuestasChat = [
  {
    pregunta: "Mañana juego al golf por primera vez, ¿qué necesito llevar?",
    claves: ["primera vez", "primer dia", "manana", "llevar", "ropa", "calzado"],
    respuesta: "Lleva ropa cómoda, calzado con buen agarre, agua y protección solar. Antes de ir, pregunta al centro por su vestimenta y si presta o alquila palos y bolas. No necesitas un equipo completo para probar. Si es tu primera vez, una zona de prácticas y una clase de iniciación pueden ayudarte a empezar con tranquilidad."
  },
  {
    pregunta: "¿Necesito comprar palos para empezar?",
    claves: ["comprar", "alquilar", "alquiler", "prestados", "necesito palos", "sin palos"],
    respuesta: "No necesitas comprar palos para empezar. Pregunta si la academia o zona de prácticas ofrece material de préstamo o alquiler. Así podrás probar antes de gastar dinero. Un profesor puede orientarte sobre qué palos te convienen cuando hayas practicado un poco."
  },
  {
    pregunta: "¿Qué significa par, birdie y bogey?",
    claves: ["par", "birdie", "bogey", "puntuacion"],
    respuesta: "El par es el número de golpes de referencia de un hoyo. Haces birdie si terminas con un golpe menos que el par, y bogey si necesitas uno más. Por ejemplo, en un hoyo de par 4: 4 golpes son par, 3 son birdie y 5 son bogey. Al empezar, céntrate en aprender y disfrutar."
  },
  {
    pregunta: "¿Qué es el handicap?",
    claves: ["handicap", "handicaps"],
    respuesta: "El hándicap es un índice que representa la capacidad de juego de un golfista y permite competir entre personas de distinto nivel. En general, cuanto más bajo es, mayor es su nivel de juego. No son los puntos de esta app. Para obtener uno oficial, consulta los pasos con tu club o federación."
  },
  {
    pregunta: "¿Para qué sirve cada palo?",
    claves: ["cada palo", "tipos de palos", "sirven los palos", "sirve", "driver", "hierro", "hierros", "maderas", "wedge", "putter"],
    respuesta: "El driver suele usarse para golpes largos desde la salida. Las maderas y los híbridos ayudan a cubrir distancias largas; los hierros sirven para distintas distancias y situaciones. Los wedges permiten golpes cortos y altos. El putter se usa principalmente en el green, la zona de hierba muy corta que rodea el hoyo, para hacer rodar la bola. No necesitas dominarlos todos al principio."
  },
  {
    pregunta: "¿Cómo funciona un campo de golf?",
    claves: ["funciona un campo", "campo de golf", "zonas", "recorrido", "hoyos", "fairway", "bunker", "green", "tee"],
    respuesta: "Un campo suele tener 9 o 18 hoyos. En cada uno comienzas en el tee, la zona de salida, y avanzas hasta meter la bola en el hoyo. El fairway es la calle de hierba corta; el green, la zona de hierba muy corta alrededor del hoyo; y los bunkers son zonas de arena. Se cuentan los golpes de cada hoyo."
  },
  {
    pregunta: "¿Qué normas de comportamiento hay en el campo?",
    claves: ["comportamiento", "normas", "etiqueta", "seguridad", "respeto"],
    respuesta: "Mantén una distancia segura de quien golpea y no juegues si puedes alcanzar a otras personas. Guarda silencio cuando alguien prepare su golpe, cuida el campo y sigue las indicaciones del personal. Lleva un ritmo ágil sin correr. Si una bola puede golpear a alguien, grita «¡Fore!», el aviso de peligro en golf. Si dudas, pregunta antes de actuar."
  },
  {
    pregunta: "¿Qué practico durante mi primera semana?",
    claves: ["primera semana", "practico", "practicar", "entrenar", "entrenamiento", "ejercicios"],
    respuesta: "Empieza con una clase de iniciación para conocer el agarre del palo y la postura. En sesiones cortas, practica contactos suaves con la bola y putting: hacer rodar la bola con el putter hacia el hoyo. Busca comodidad y control antes que distancia. Descansa cuando lo necesites y pide ayuda a un profesor para corregir tu técnica."
  }
];

const respuestaNoEncontrada = "En este prototipo solo puedo responder a las ocho preguntas de ejemplo. Elige una de los botones de abajo para continuar.";
