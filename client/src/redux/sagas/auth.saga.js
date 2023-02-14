import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/auth.action";
import * as constants from "../constants/auth.constant";
import paths from "../../api/path";
import NetworkApi from "../../api/NetworkApi";
import { setItems } from "../../utils/storage";
import { getItems } from "../../utils/storage";

import { showNotification } from "../actions/customNotification.action";

const getApiConfig = () => {
  const [tokenType, token] = getItems(["tokenType", "token"]);
  const headers = {
    Authorization: `${tokenType} ${token}`,
    token,
  };
  return {
    headers,
    Authorization: headers.Authorization,
  };
};

export function* isLoginSaga(data) {
  try {
    const { payload, loginType } = data;

    const response = yield call(NetworkApi.post, paths.LOGIN_API_URL, payload);
    
    if (response.status && response.data) {
      const data = response.data;
      
      setItems([
        { key: "tokenType", value: "Bearer" },
        { key: "token", value: data.tokens.token },
        { key: "user", value: data.user },
      ]);
      yield put(actions.isLoginSuccessfull(data));
      yield put(
        showNotification("Login successfully", "success")
      );
    } else {
      yield put(actions.isLoginFailed());
    }
  } catch (e) {
    const errorMessage = e.message;
    yield put(actions.isLoginFailed());
    yield put(showNotification(errorMessage, "warning"));
  }
}
export function* isRegisterSaga(data) {
  try{
    const { payload, registerType } = data;
    console.log(payload);
    
    const response = yield call(NetworkApi.post, paths.REGISTER_API_URL, payload);

    if (response.status && response.data) {
      const data = response.data;
      yield put(actions.isRegisterSuccessfull(data));
    }

  } catch(e) {
    yield put(actions.isRegisterFailed());
  }
}
export function* logedIn() {
  yield takeLatest(constants.LOGIN, isLoginSaga);
}
export function* registered() {
  yield takeLatest(constants.REGISTER, isRegisterSaga);
}


