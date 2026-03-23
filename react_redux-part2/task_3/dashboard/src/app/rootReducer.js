import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import coursesReducer from "../features/courses/coursesSlice";
import notificationsReducer from "../features/notifications/notificationsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  courses: coursesReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
