import { call, put, takeLatest } from "redux-saga/effects";

import { actions,receiveTweets } from "../actions";

const fetchData = async (topic) =>{
    try{
    const res = await fetch(`/api/tweets?topic=${topic}`,{method:'GET'})
    const json = await res.json()
    return json;
    }catch(err){
        console.log(err);
    }

}

function* getTweets(actions) {
  try {
    console.log(actions.topic)
    const data = yield call(fetchData,actions.topic);
    yield put(receiveTweets(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(actions.REQUEST_TWEETS, getTweets);
}