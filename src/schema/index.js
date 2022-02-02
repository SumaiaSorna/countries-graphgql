const { gql } = require("apollo-server");

const typeDefs = gql`
  type Weather {
    date: String
    temperature: Float
    humidity: Float
    windSpeed: Float
    weatherIconUrl: String
  }

  type City {
    name: String
    latitude: Float
    longitude: Float
    currentWeather: Weather
    forecastWeather: [Weather]
  }

  type Rates {
    code: String
    rate: Float
  }

  type Currency {
    code: String
    name: String
    symbol: String
    rates: [Rates]
  }

  type country {
    name: String
    countryCode: String
    isIndependent: Boolean
    isUnMember: Boolean
    region: String
    Languages: [String]
    latitude: Float
    longitude: Float
    population: Int
    flagImageUrl: String
    currencies: [Currency]
    capital: City
  }
  type Query {
    country(countryCode: String!): country
  }
`;

module.exports = typeDefs;
