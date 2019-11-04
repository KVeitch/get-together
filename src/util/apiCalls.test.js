/* eslint-disable max-lines-per-function */
import { getFlights, getPhotos } from './apiCalls'
import mockFlightData from '../../testData/mockFlightData'
import mockImageData from '../../testData/mockImageData'
import mockImageResults from '../../testData/mockImageResults'
import mockFlightResponce from '../../testData/mockFlightResults'

describe('getFlights', () => {
  let mockUrl
  let mockOptions
  let mockDate
  let mockStart
  let mockDestination
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFlightData)
    }))
    mockUrl = 'https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session?country=US&from0=DEN&to0=JKF&date0=10%2011%202019&pax=1&cabin=Coach'
    mockOptions = {headers: {"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com", "x-rapidapi-key": '5f964e0d35msh254efda075569fep1947ccjsn8d995b65b42b'}, method: 'GET'}
    mockDate = {
      year: '2019',
      month: '10',
      day: '11'
    }
    mockStart = 'DEN'
    mockDestination = 'JKF'
  })

  it('should fetch with the correct url', () => {
    getFlights(mockDate, mockStart, mockDestination)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions)
  })

  it('should return an array of Flight paths (HAPPY)', async () => {
    const results = await getFlights(mockDate, mockStart, mockDestination)
    expect(results).toEqual(mockFlightResponce)
  })
})

describe('getPhotos (HAPPY)', () => {
  let mockUrl
  const mockLocation = 'Denver'

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ results: mockImageData.results })
    }))
    mockUrl = 'https://api.unsplash.com/search/photos?client_id=bae25609c3bdb0c5f9d62b474ae3272d610fa1966ba734348cdfff4504278240&query=Denver&orientation=landscape&per_page=15&accept%20version=v1'
  })

  it('should fetch with the correct url', () => {

    getPhotos(mockLocation)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should return an array of image Urls (HAPPY)', () => {
    expect(getPhotos(mockLocation)).resolves.toEqual(mockImageResults)
  })
})

describe('getPhotos (SAD)', () => {
  it('should return an Error when of is false (SAD)', () => {
    const mockLocation = 'Denver'
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      json: () => Promise.resolve({ results: mockImageData.results })
    }))

    expect(getPhotos(mockLocation)).rejects.toEqual(Error('Woops! Something went wrong'))
  })
})
