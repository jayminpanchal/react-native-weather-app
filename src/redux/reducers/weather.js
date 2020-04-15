import * as actionTypes from '../actionTypes';

const initialState = {
    countries: [],
    countryError: null,
    weatherError: null,
    isLoading: false,
};

export const weather = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COUNTRY:
            return {
                ...state,
                countries: [],
                countryError: null,
                isLoading: true,
            };
        case actionTypes.SET_COUNTRY:
            return {
                ...state,
                countries: action.payload,
                countryError: null,
                isLoading: false,
            };
        case actionTypes.SET_COUNTRY_ERROR:
            return {
                ...state,
                countries: [],
                countryError: action.payload,
                isLoading: false,
            };
        case actionTypes.FETCH_WEATHER:
            return {
                ...state,
                isLoading: true,
                weatherError: null,
            };
        case actionTypes.SET_WEATHER:
            const {countries} = state;
            const {weather, countryName} = action.payload;
            return {
                ...state,
                weatherError: null,
                countries: countries.map(country => {
                    if (country.name === countryName) {
                        return {...country, weather};
                    }
                    return country;
                }),
                isLoading: false,
            };
        case actionTypes.SET_WEATHER_ERROR:
            return {
                ...state,
                weatherError: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

