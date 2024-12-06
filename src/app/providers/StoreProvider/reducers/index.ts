import { combineReducers } from "@reduxjs/toolkit";
import {
  academicPerformanceApi,
  studentApi,
  specializationApi,
  groupApi,
  formOfEducationApi,
  disciplineApi,
  userApi,
  isAuthReducer,
} from "../../../../entities";

export const rootReducer = combineReducers({
  isAuth: isAuthReducer,
  [academicPerformanceApi.reducerPath]: academicPerformanceApi.reducer,
  [studentApi.reducerPath]: studentApi.reducer,
  [specializationApi.reducerPath]: specializationApi.reducer,
  [groupApi.reducerPath]: groupApi.reducer,
  [disciplineApi.reducerPath]: disciplineApi.reducer,
  [formOfEducationApi.reducerPath]: formOfEducationApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});
