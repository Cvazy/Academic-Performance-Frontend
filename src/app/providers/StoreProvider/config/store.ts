import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";
import {
  academicPerformanceApi,
  studentApi,
  specializationApi,
  groupApi,
  formOfEducationApi,
  disciplineApi,
  userApi,
} from "../../../../entities";

export function createReduxStore(initialState = {}) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        academicPerformanceApi.middleware,
        studentApi.middleware,
        specializationApi.middleware,
        groupApi.middleware,
        formOfEducationApi.middleware,
        disciplineApi.middleware,
        userApi.middleware,
      ),
    preloadedState: initialState,
  });
}
