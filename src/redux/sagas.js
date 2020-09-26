import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "./actions";
import { fetchData } from "./api";


function* getApiData(action) {

  try {
  
    const data = yield call(fetchData,action.data);

    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}


export default function* mySaga() {
  yield takeEvery(REQUEST_API_DATA, getApiData);
}