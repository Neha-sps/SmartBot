import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { customNotificationReducer } from "./customNotification.reducer";

const reducers = combineReducers({
  auth: authReducer,
  customNotification: customNotificationReducer,
});
export default reducers;
