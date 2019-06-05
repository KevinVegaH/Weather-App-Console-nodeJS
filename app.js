const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  // <--- Permite configurar argumentos directamente en la raiz de la aplicación
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

const getInfo = async direccion => {
  try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng); // pasamos la latitud y la longitud del objeto recibido en Coords
    return `El clima de ${coords.direccion} es de ${temp}.`;
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);
