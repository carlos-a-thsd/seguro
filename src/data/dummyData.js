<<<<<<< HEAD
import moment from "moment";
function distribuirValores(elementos) {
  const total = elementos.reduce(
    (total, elemento) => total + elemento.value,
    0
  );
  const factorDeEscalado = 100 / total;
  return elementos.map((elemento) => ({
    name: elemento.name,
    value: Math.floor(elemento.value * factorDeEscalado),
  }));
}
function aleatorioResumenMonetario() {
  return (
    Math.floor(Math.random() * (10000000000 - 1000000000 + 1)) + 1000000000
  );
}
function aleatorioResumenTransacional() {
  return Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;
}

function getTimelineData() {
  var y1 = Math.random() * 500000 + 500000;
  var y2 = Math.random() * 500 + 500;
  var y3 = Math.random() * 500 + 500;
  var d = moment(new Date()).startOf("day").toDate().valueOf();

  var data2 = new Array((moment().hours() * 60) / 5).fill(0).map((o, i) => {
    var date = new Date(d + i * 60 * 5 * 1000).valueOf();
    y1 += Math.random() * 100000 - 50000;
    return { date, y1 };
  });
  var data = new Array((24 * 60) / 5).fill(0).map((o, i) => {
    var date = new Date(d + i * 60 * 5 * 1000).valueOf();
    y1 += Math.random() * 100000 - 50000;
    y2 += Math.random() * 100 - 50;
    y3 += Math.random() * 100 - 50;
    const yl = y1 * 0.6 + Math.random();
    const yu = y1 / 0.6 + Math.random();
    const ye = y1 + Math.random() * 20000 - 50000;
    return { date, y1, y2, y3, yl, yu, ye };
  });

  data.map((o) =>
    Object.assign(o, {
      y1:
        data2.find((p) => p.date == o.date) != undefined
          ? data.find((p) => p.date == o.date).y1
          : null,
    })
  );

  return data;
}

function generarValoresAleatorios(nombres, rangoMinimo, rangoMaximo) {
  return nombres.map((nombre) => {
    const valor = Math.random() * (rangoMaximo - rangoMinimo) + rangoMinimo;
    return { name: nombre, value: Math.floor(valor) };
  });
}

function transaccionesNumeros() {
  const aceptadas = Math.floor(Math.random() * (100000 - 20000 + 1) + 20000);
  const rechazadas = aceptadas * 0.12;
  const total = aceptadas + rechazadas;
  const totalMonetario = Math.floor(
    Math.random() * (1000000000 - 200000000 + 1) + 200000000
  );
  const resultado = {
    aceptadas,
    rechazadas,
    total,
    totalMonetario,
  };

  return resultado;
}

export function getData() {
  const nombres = ["GFNORTE", "BYOD", "GFBA", "INVITADOS", "OTHERS"].map(
    (o) => ({
      name: o,
      count: Math.floor(Math.random() * (100 - 20) + 20),
    })
  );

  const disponibilidadInfraestructura = [
    "Servidores",
    "Base de datos",
    "Comunicaciones",
    "F5",
    "Enlaces",
    "IIS",
    "Seguridad",
    "Web Servers",
  ];
  const disponibilidadInfraestructuraConValores = generarValoresAleatorios(
    disponibilidadInfraestructura,
    1,
    4
  );

  const disponibilidad = [
    "Portal Payworks",
    "Emisores",
    "Comercios",
    "Comercios Digitales",
    "Comercios Físicos",
    "Transacciones Físicas",
    "Transacciones Digitales",
  ];
  const disponibilidadConValores = generarValoresAleatorios(
    disponibilidad,
    1,
    4
  );

  const cats = ["Monterrey", "Cd. de México", "Durango"].map((name) => ({
    name,
    value: Math.random() * 100000,
  }));
  const emisores = ["Banorte", "BBVA", "HSBC", "Santander", "Citibanamex"];
  const emisoresConValores = generarValoresAleatorios(emisores, 0, 100);
  const emisoresAjustados = distribuirValores(emisoresConValores);
=======
import moment from 'moment';
export function getData () {

    
   
    
    const nombres = ["GFNORTE", "BYOD", "GFBA", "INVITADOS", "OTHERS"].map(
        (o) => ({
            name: o,
            count: Math.floor(Math.random() * (100 - 20) + 20),
        })
    );
    const cats = ["Monterrey", "Cd. de México", "Durango"].map(name => ({ name, value: Math.random() * 100000 }));
    const emisores = ["Banorte", "BBVA", "HSBC", "Santander", "Citibanamex"];

// Generar valores aleatorios para cada emisor
const emisoresConValores = emisores.map(emisor => {
    // Generar un valor aleatorio en el rango de 0 a 100
    const valor = Math.random() * 100;

    return { name: emisor, value: valor };
});
>>>>>>> parent of e568f57 (feat: :fire: realizar top emisores y comercios)

// Calcular el total de valores asignados a los emisores
const totalActual = emisoresConValores.reduce((total, emisor) => total + emisor.value, 0);

// Ajustar los valores para que el total sea igual a 100
const factorDeEscalado = 100 / totalActual;
const emisoresAjustados = emisoresConValores.map(emisor => ({
    name: emisor.name,
    value: Math.floor(emisor.value * factorDeEscalado)
}));
    return {
            nombres,
            cats,
            emisoresAjustados
    }
}
export const data = getData()