import * as actionTypes from '../actionTypes';

export const fetchCountry = (payload) => {
    return {
        type: actionTypes.FETCH_COUNTRY,
        payload,
    };
};

export const setCountry = (payload) => {
    return {
        type: actionTypes.SET_COUNTRY,
        payload,
    };
};
export const setCountryError = (payload) => {
    return {
        type: actionTypes.SET_COUNTRY_ERROR,
        payload,
    };
};
export const fetchWeather = (payload) => {
    return {
        type: actionTypes.FETCH_WEATHER,
        payload,
    };
};

export const setWeather = (payload) => {
    return {
        type: actionTypes.SET_WEATHER,
        payload,
    };
};
export const setWeatherError = (payload) => {
    return {
        type: actionTypes.SET_WEATHER_ERROR,
        payload,
    };
};
