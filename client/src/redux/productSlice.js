import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:8000";

export const productSlice = createApi({
  reducerPath: "productSlice",
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    // Fetch all products
    getProducts: builder.query({
      query: () => "/api/products",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = productSlice;
