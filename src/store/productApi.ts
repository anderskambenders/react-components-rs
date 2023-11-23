import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { BASE_URL } from '../api/api';

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (build) => ({
    getProducts: build.query({
      query: (args) => {
        const { searchValue, limit, skip } = args;
        return {
          url: `/search?q=${searchValue}&limit=${limit}&skip=${skip}`,
        };
      },
    }),

    getProduct: build.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
export const { getProducts, getProduct } = productsApi.endpoints;