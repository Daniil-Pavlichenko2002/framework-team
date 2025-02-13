import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPaintings } from '../modules/IPaintings';
import { IAutor } from '../modules/IAutor';
import { ILocation } from '../modules/ILocation';

export const paintingsAPI = createApi({
  reducerPath: 'paintingsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: build => ({
    fetchAllPaintings: build.query<
      IPaintings[],
      { limit: number; page: number; search: string }
    >({
      query: ({ limit = 6, page = 1, search = '' }) => ({
        url: '/paintings',
        params: {
          _limit: limit,
          _page: page,
          q: search,
        },
      }),
    }),
    fetchAllAutors: build.query<IAutor, number>({
      query: id => ({
        url: `/authors/${id}`,
      }),
    }),
    fetchAllLocation: build.query<ILocation, number>({
      query: id => ({
        url: `/locations/${id}`,
      }),
    }),
    getTotalPaintings: build.query({
      query: () => ({
        url: '/paintings',
      }),
    }),
  }),
});
