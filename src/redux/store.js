import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postsSlice';

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
