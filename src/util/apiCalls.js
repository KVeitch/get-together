 import { apiKey, unsplashApiKey }  from './apiKey';

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

  const results = await fetch(flightSearchURL+query, options);
  const data = await results.json();
  const cleanedData = cleanFlightData(data);

  return cleanedData
}

const cleanFlightData = (data) => {
  const legs = data.legs 
  const cleanData = Object.keys(legs).map(leg => ({ 
    depart:legs[leg].depart_iso,
    arrive:legs[leg].arrive_iso,
    from:legs[leg].from_code,
    to:legs[leg].to_code,
    flightNo:legs[leg].marketing_num[1]
  }))
  return cleanData
}

export const getPhotos = async (location) => {
  const unsplashBaseUrl ='https://api.unsplash.com/search/photos?';
  const id = `client_id=${unsplashApiKey}`
  const search = `query=${location}`
  const orientation = 'orientation=landscape'
  const perPage = 'per_page=8'
  const url = `${unsplashBaseUrl}${id}&${search}&${orientation}&${perPage}&accept%20version=v1`
  console.log(url)
  const results = await fetch(url)
  const data = await results.json()
  const cleanData = cleanPhotoData(data.results)
  return cleanData;
}

const cleanPhotoData = (photos) => {
  return  photos.map(photo => photo.urls.small)
}
