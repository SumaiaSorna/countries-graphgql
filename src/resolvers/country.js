const axios = require("axios");

const country = async (_, args) => {
  console.log(args);
  // get the country code
  const { countryCode } = args;
  console.log(countryCode);

  // get data from API
  const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;

  const { data } = await axios.get(url);

  const countryData = data[0];

  return {
    name: countryData?.name?.common,
    countryCode: countryData?.cca2,
    isIndependent: countryData?.independent,
    isUnMember: countryData?.UnMember,
    region: countryData?.region,
    Languages: Object.values(countryData?.languages || {}),
    latitude: countryData?.latlng[0],
    longitude: countryData?.latlng[1],
    population: countryData?.population,
    flagImageUrl: countryData?.flags?.png,
    _currencies: countryData?.currencies,
    capital: {
      name: "London",
      latitude: 51.5,
      longitude: -0.08,
      currentWeather: {
        temperature: 32,
        humidity: 23,
        windSpeed: 43,
        weatherIconUrl: "",
      },
      forecastWeather: [
        {
          date: "2nd feb, 2022",
          temperature: 32,
          humidity: 23,
          windSpeed: 43,
          weatherIconUrl: "",
        },
        {
          date: "2nd feb, 2022",
          temperature: 32,
          humidity: 23,
          windSpeed: 43,
          weatherIconUrl: "",
        },
        {
          date: "2nd feb, 2022",
          temperature: 32,
          humidity: 23,
          windSpeed: 43,
          weatherIconUrl: "",
        },
        {
          date: "2nd feb, 2022",
          temperature: 32,
          humidity: 23,
          windSpeed: 43,
          weatherIconUrl: "",
        },
        {
          date: "2nd feb, 2022",
          temperature: 32,
          humidity: 23,
          windSpeed: 43,
          weatherIconUrl: "",
        },
      ],
    },
  };
};

module.exports = country;
