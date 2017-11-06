import axios from 'axios';

const API_KEY = '0dad158e9c086121cf76a1f96cba0b08';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},de`;
    const req = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: req
    }
}