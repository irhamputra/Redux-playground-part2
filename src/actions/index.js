import axios from 'axios';

const API_KEY = 'bd0ea308ca71412eeb1c293f0b567d6b';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const req = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: req
    }
}