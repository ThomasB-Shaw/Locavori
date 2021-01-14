import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addFavorite(action) {
    console.log('updateFavorite action.payload:', action.payload);
    
    try {
        const favorites = yield axios.post(`/api/favorites/${action.payload}`);
        yield put({type: 'GET_SPECIFIC_FAVORITES', payload: favorites.data})
    } catch (error) {
        console.log('Update favorite failed', error);
    }
}

function* getFavorites() {
    try {
        const favorites = yield axios.get(`/api/favorites`);
        yield put({type: 'SET_FAVORITES', payload: favorites.data});
    } catch (error) {
        console.log('Update favorite failed', error);
    }
}
function* getSpecificFavorite(){
    try {
        const specificFavorites = yield axios.get(`/api/specificFavorites`);
        yield put({type: 'SET_SPECIFIC_FAVORITES', payload: specificFavorites.data});
    } catch (error) {
        console.log('Update favorite failed', error);
    }
}


function* deleteFavorite(action) {
    try {
        console.log('deleteFavorite action.payload:', action.payload);
        
        const favorites = yield axios.delete(`/api/favorites/${action.payload}`);
        yield put({type: 'GET_FAVORITES', payload: favorites.data});
    } catch (error) {
        console.log('Remove favorite failed', error);
    }
}

function* favoritesSaga() {
    yield takeEvery('POST_FAVORITE', addFavorite);
    yield takeEvery('GET_FAVORITES', getFavorites);
    yield takeEvery('GET_SPECIFIC_FAVORITES',getSpecificFavorite);
    yield takeEvery('DELETE_FAVORITE', deleteFavorite);
}

export default favoritesSaga;