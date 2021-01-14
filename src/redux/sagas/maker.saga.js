import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Gets all makers on component mounting
function* getMakers() {
    try {
        const makers = yield axios.get('/api/maker/getall');
        yield put({type: 'SET_MAKER', payload: makers.data});
    } catch (error) {
        console.log('GET all makers failed', error);
    }
}
function* getMakerCard(action) {
    try {
        const makerCard = yield axios.get(`/api/makerCard/${action.payload.id}`);
        yield put({type: 'SET_MAKER_CARD', payload: makerCard.data});
    } catch (error) {
        console.log('GET MakerCard failed', error);
    }
}

// Gets makers based on filter parameters
// Parameters are sent using req.query and assigning names to the different filters
function* filterMakers(action) {
    try {
        const makers = yield axios.get(`/api/maker/?availability=${action.payload.availability}&delivery=${action.payload.delivery}&makers=${action.payload.maker_options}&location=${action.payload.location}&fresh=${action.payload.fresh}&prepared=${action.payload.prepared}&beverages=${action.payload.beverage}&diet=${action.payload.diet}`);
        yield put({type: 'SET_FILTERED_MAKER', payload: makers.data.flat().filter((value, index, array) => array.findIndex(t => (t.id === value.id)) === index)});
    } catch (error) {
        console.log('maker filter GET failed', error);
    }
}

// On click of "save" in form, update tbl_artisans with form data
function* putMakerRegistration(action) {
    try {
        yield axios.put(`/api/maker`, action.payload);
    } catch (error) {
        console.log('error in maker registration PUT', error);
    }
}

// On click of "submit" in form, update tbl_artisans with form data
function* submitMaker(action) {
    try {
        yield axios.put(`/api/maker/submit`, action.payload);
    } catch (error) {
        console.log('error in maker registration PUT', error);
    }
}

function* makerSaga() {
    yield takeEvery('GET_MAKERS', getMakers);
    yield takeEvery('FILTER_MAKERS', filterMakers);
    yield takeEvery('GET_MAKER_CARD', getMakerCard);
    yield takeEvery('PUT_MAKER_INFO', putMakerRegistration);
    yield takeEvery('PUT_SUBMIT', submitMaker);
}

export default makerSaga;