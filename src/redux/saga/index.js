import {all} from 'redux-saga/effects';

import {fetchCountryWatcher} from './country';
import {fetchWeatherWatcher} from './weather';

export default function* rootSaga() {
    yield all([
        fetchCountryWatcher(),
        fetchWeatherWatcher(),
    ]);
}
