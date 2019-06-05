const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5d8b23e1827d86632d1e6957ac00e320&units=metric`
  );

  return resp.data.main.temp; // Retornamos la temperatura
};

module.exports = {
  getClima
};
