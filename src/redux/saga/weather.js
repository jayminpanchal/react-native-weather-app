import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actionTypes';
import {setWeather, setWeatherError} from '../actions';
import {API_KEY} from '../../utils/constant';

function fetchWeatherApi(cityName) {
    return axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${cityName}`);
}

function* fetchWeatherActionEffect(action) {
    try {
        console.log('fetchWeatherActionEffect', action);
        const response = yield call(fetchWeatherApi, action.payload.cityName);
        console.log(response);
        yield put(setWeather({weather: response.data, countryName: action.payload.countryName}));
    } catch (e) {
        yield put(setWeatherError(e.response));
    }
}

export function* fetchWeatherWatcher() {
    yield takeLatest(actionTypes.FETCH_WEATHER, fetchWeatherActionEffect);
}
