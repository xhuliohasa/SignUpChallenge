import {createAsyncThunk} from '@reduxjs/toolkit';
import {ACTION_SET_SIGNUP_DATA} from '.';

export const actionSetSignUpData = createAsyncThunk(
  ACTION_SET_SIGNUP_DATA,
  async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(undefined);
    }
  },
);
