const axios = require('axios');
const config = require('./config.json');

const getExchangeRate = async (from, to) => {
  try {
    const response = await axios.get(
      `http://data.fixer.io/api/latest?access_key=${config['FIXER-API']}`
    );

    const euro = 1 / response.data.rates[from];
    const rate = euro * response.data.rates[to];

    if (isNaN(rate)) {
      throw new Error();
    }

    return rate;
  } catch (e) {
    throw new Error(`Unable to get exchange rate for ${from}, ${to}`);
  }
};

const getCountries = async currencyCode => {
  try {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/currency/${currencyCode}`
    );

    return response.data.map(country => country.name);
  } catch (e) {
    throw new Error(`Unable to get countries that use ${currencyCode}`);
  }
};

const convertCurrency = async (from, to, amount) => {
  const convertedAmount = ((await getExchangeRate(from, to)) * amount).toFixed(
    2
  );
  const countries = await getCountries(to);

  return `${amount}${from} is worth ${convertedAmount}${to}. You can spend it in ${countries}`;
};

convertCurrency('USD', 'BGN', 20)
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.log(e.message);
  });
