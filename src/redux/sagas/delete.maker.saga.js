import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* deleteMaker(action) {
   //recieves info of which item to "delete" from db and updates
    try {
        let response = yield axios.put(`/api/maker/${action.payload}`);
        console.log('in delete maker looking for ID :',action.payload);
        
        yield put({ type: 'GET_MAKERS', payload: response.data })
    } catch (error) {
        console.log('error in delete catch', error);
    }
}
function* approveMaker(action) {
    //recieves info of which item to "delete" from db and updates
     try {
         let response = yield axios.put(`/api/adminApprove/${action.payload}`);
         console.log('in approveMaker looking for ID :',action.payload);
         
         yield put({ type: 'GET_MAKERS', payload: response.data })
     } catch (error) {
         console.log('error in delete catch', error);
     }
 }
 function* denyMaker(action) {
    //recieves info of which item to "delete" from db and updates
     try {
         let response = yield axios.delete(`/api/adminDeny/${action.payload}`);
         console.log('in denyMaker looking for ID :',action.payload);
         yield put({ type: 'GET_MAKERS', payload: response.data })
     } catch (error) {
         console.log('error in delete catch', error);
     }
 }
function* deleteMakerSaga() {
    yield takeLatest('DELETE_MAKER', deleteMaker);
    yield takeLatest('APPROVE_MAKER', approveMaker);
    yield takeLatest('DENY_MAKER', denyMaker);
}

export default deleteMakerSaga;

