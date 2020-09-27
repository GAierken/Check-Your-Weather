import { all, call, put, fork, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData, REQUEST_ACTIVEITEM_DATA, receiveActiveItemData } from "./actions";
import { fetchData } from "./api";


function* getApiData(action) {

  try {
  
    const data = yield call(fetchData,action.data);

    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}


function* setActiveItem(action){
     
   yield put(receiveActiveItemData(action.data))
}

 function* fetchSaga() {
  
  yield takeEvery(REQUEST_API_DATA, getApiData);
}

function* activeItemSaga(){
    
  yield takeEvery(REQUEST_ACTIVEITEM_DATA, setActiveItem)
}

export default function* rootSaga(){
    yield fork(fetchSaga)
    yield fork(activeItemSaga)
    
    
}