const country = () => {
  return {
    name: "United Kingdom",
    countryCode: "GB",
    isIndependent: true,
    isUnMember: true,
    region: "Europe",
    Languages: ["English"],
    latitude: 34,
    longitude: 23,
    population: 67215293,
    flagImageUrl: "https://flagcdn.com/w320/gb.png",
    currencies: [
      {
        code: "GBP",
        name: "British pound",
        symbol: "£",
        rates: [
          {
            code: "AED",
            rate: 3.673,
          },
          {
            code: "AED",
            rate: 3.673,
          },
          {
            code: "AED",
            rate: 3.673,
          },
          {
            code: "AED",
            rate: 3.673,
          },
        ],
      },
    ],
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
