import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "shared";
import { IStudent } from "../types";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchAllStudents: builder.query<IStudent[], null>({
      query: () => "students",
    }),
    fetchSearchedStudents: builder.query<IStudent[], string>({
      query: (search: string = "") => ({
        url: "students",
        params: { search },
      }),
    }),
  }),
});
