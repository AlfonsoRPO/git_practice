const zodiaco = ['Acuario', 'Piscis', 'Aries', 'Tauro', 'Geminis', 'Cancer',
    'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio'];
const planeta = ['Mercurio', 'venus', 'Tierra', 'Marte', 'Jupiter', 'Saturno', 'Urano',
'Neptuno', 'Pluton'];
const sl = ['La Luna', 'El Sol' ];
const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const alguna_situacion = ['suenios vividos', 'mal estar social', 'tiempos dificiles', 'algun conflicto interior'];
const cosa_que_hacer = ['no dejarte engañar por la fuente del suceso', 'permitirte cometer errores', 'amarte mucho', 'compartir tu tiempo',
'no dejarte influenciar por otros', 'pasar a tiempo con tu circulo interno', 'explorar un nuevo pasatiempo', 'hacerte una limpia', 
'cuestionar tu realidad'];
const refleccion = ['refleccionar', 'visualizar', 'cuestionar', 'afrontar', 'respirar', 'meditar', 'comprender', 'pensar', 'estudiar'];
const bullshit = ['causar mucha tension sexual', 'traer mensajes de un futuro', 'dar oportunidades con el sexo opuesto', 
'dar oportunidades con el mismo sexo', 'provocar problemas', 'provocar problemas con el sexo opuesto', 'provocar problemas con el mismo sexo',
'decirte que es momento de parar', 'causar soledad', 'decirte que es hora de tener mucho sexo', 'traer momentos de paz', 
'ser una oportunidad para confesar tu amor'];
const lugar = ['el amor', 'el trabajo', 'la familia', 'la relacion'];
const posicion = ['oposicion', 'frente', 'a un lado', 'detras'];
var fecha = new Date();
var hoy = fecha.getDate() +' de ' +mes[fecha.getMonth()] +' del ' +fecha.getFullYear();


function randomizador(numero){
    if(numero === 12){
        return Math.floor(Math.random() * 12);
    }
    if(numero === 9){
        return Math.floor(Math.random() * 9);
    }
    if(numero === 2){
        return Math.floor(Math.random() * 2);
    }
    if(numero === 4){
        return Math.floor(Math.random() * 4);
    }
    
};



console.log(`Buenos dias ${zodiaco[randomizador(12)]} hoy es ${hoy}, 
${sl[randomizador(2)]} de ${zodiaco[randomizador(12)]} se mueve ${posicion[randomizador(4)]} a ${planeta[randomizador(9)]} en ${zodiaco[randomizador(12)]}, 
en cuadratura a ${planeta[randomizador(9)]} con ${zodiaco[randomizador(12)]}, todo el mundo hoy se enfrenta a ${alguna_situacion[randomizador(4)]}, 
tendras que ${cosa_que_hacer[randomizador(9)]}, ahora tomate un momento para ${refleccion[randomizador(9)]}, 
en ${lugar[randomizador(4)]} cuando ${planeta[randomizador(9)]} y ${planeta[randomizador(9)]} se conjugan esto podria ${bullshit[randomizador(12)]}`);
 

