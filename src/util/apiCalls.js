 import apiKey from './apiKey';


export const getFlights = async (date, startingLocation, destination) => {
  const flightSearchURL = 'https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session?country=US';
  const query = `&from0=${startingLocation}&to0=${destination}&date0=${date.month}%20${date.day}%20${date.year}&pax=1&cabin=Coach`;
  const options = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }
  }

  const results = await fetch(flightSearchURL+query, options)
  return results.json()
}

const cleanFlightData = (data) => ({

})





export const getPictures = () => {}

