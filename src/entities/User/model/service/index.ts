import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "shared";
import { IUser } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialIsAuthState = {
  user: null as Omit<IUser, "password"> | null,
};

const isAuthSlice = createSlice({
  name: "isAuth",
  initialState: initialIsAuthState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<Omit<IUser, "password"> | null>,
    ) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl.slice(0, -4)}/auth`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchUserRegister: builder.mutation<null, IUser>({
      query: ({ username, email, password }) => ({
        url: "register/",
        method: "POST",
        body: { username, email, password },
      }),
    }),

    fetchUserLogin: builder.mutation<null, IUser>({
      query: ({ username, email, password }) => ({
        url: "login/",
        method: "POST",
        body: { username, email, password },
      }),
    }),

    fetchUserLogout: builder.mutation<null, null>({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
  }),
});

export const { loginUser, logoutUser } = isAuthSlice.actions;
export const isAuthReducer = isAuthSlice.reducer;
