 import { apiKey, unsplashApiKey }  from './apiKey'
 import { cleanPhotoData, cleanFlightData} from './helper'

export const getFlights = async (date, startingLocation, destination) => {
  const flightSearchURL = 'https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session?country=US'
  const query = `&from0=${startingLocation}&to0=${destination}&date0=${date.month}%20${date.day}%20${date.year}&pax=1&cabin=Coach`
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }
  }
  const results = await fetch(flightSearchURL + query, options)
  if (!results.ok) {
    throw Error('Woops! Something went wrong')
  }
  const data = await results.json()
  const cleanedData = cleanFlightData(data)

  return cleanedData
}

export const getPhotos = async (location) => {
  const unsplashBaseUrl ='https://api.unsplash.com/search/photos?'
  const id = `client_id=${unsplashApiKey}`
  const search = `query=${location}`
  const orientation = 'orientation=landscape'
  const perPage = 'per_page=15'
  const url = `${unsplashBaseUrl}${id}&${search}&${orientation}&${perPage}&accept%20version=v1`
  const results = await fetch(url)
  if (!results.ok) {
    throw Error('Woops! Something went wrong')
  }
  const data = await results.json()
  const cleanData = cleanPhotoData(data.results)
  return cleanData
}
