import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {signUpSlice} from './SignUp/slice';

const rootReducer = combineReducers({
  signUp: signUpSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
export default store;
