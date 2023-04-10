import { createAsyncThunk } from "@reduxjs/toolkit";

import { pokemonLocalApiConfig } from "config/pokemonApiConfig";
import localStorageService from "services/localStorageService";

const signIn = (body) => pokemonLocalApiConfig.post("/auth/signIn", body);

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await signIn(payload);
      const { accessToken, ...accountData } = responce.data;
      localStorageService.getToken(accessToken);

      return accountData;
    } catch (error) {
      return rejectWithValue(error.responce.data.message);
    }
  }
);
