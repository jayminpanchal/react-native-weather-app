import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actionTypes';
import {setCountry, setCountryError} from '../actions';


function fetchCountryApi(countryName) {
    return axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`);
}

function* fetchCountryActionEffect(action) {
    try {
        console.log('action', action);
        const response = yield call(fetchCountryApi, action.payload.countryName);
        yield put(setCountry(response.data));
    } catch (e) {
        const error = e.response && e.response.data ? e.response.data : {message: 'Server Error'};
        yield put(setCountryError(error));
    }
}

export function* fetchCountryWatcher() {
    yield takeLatest(actionTypes.FETCH_COUNTRY, fetchCountryActionEffect);
}
