import {createSlice} from '@reduxjs/toolkit';
import {actionSetSignUpData} from './actions/actionSetSignUpData';

interface SignUpState {
  name: string;
  email: string;
  password: string;
  website: string;
  image: string;
}

const initialState: SignUpState = {
  name: '',
  email: '',
  password: '',
  website: '',
  image: '',
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actionSetSignUpData.fulfilled, (state, action) => {
      const {name, email, password, website, image} = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
      state.website = website;
      state.image = image;
    });
  },
});
