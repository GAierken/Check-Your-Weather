// saga related -- GA
import {  call, put, fork, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA, receiveApiData, REQUEST_ACTIVEITEM_DATA, receiveActiveItemData, REQUEST_MODAL_DATA,receiveModalData } from "./actions";
import { fetchData } from "./api";

// fetch weather data -- GA
function* getApiData(action) {

  try {
  
    const data = yield call(fetchData,action.data);

    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

// set selected city for changing web page title -- GA
function* setActiveItem(action){
     
   yield put(receiveActiveItemData(action.data))
}

// set modal triggger -- GA
function* setModalStatus(action){
  yield put(receiveModalData(action.data))
}



 function* fetchSaga() {
  
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

function* activeItemSaga(){
    
  yield takeLatest(REQUEST_ACTIVEITEM_DATA, setActiveItem)
}


function* modalSaga(){
    
  yield takeLatest(REQUEST_MODAL_DATA, setModalStatus)
}

// handle multiple sagas -- GA
export default function* rootSaga(){
    yield fork(fetchSaga)
    yield fork(activeItemSaga)
    yield fork(modalSaga)
    
    
}