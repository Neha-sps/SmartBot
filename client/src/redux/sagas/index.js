import { all } from "redux-saga/effects";

import {
  logedIn,
  registered
} from "./auth.saga";

export default function* rootSaga() {
  yield all([
    logedIn(),
    registered(),
  ]);
}
