import { createSlice } from '@reduxjs/toolkit';
import { getPostAPI, getPostsAPI, getLimitedPostsAPI } from '../WebAPI';
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    isLoading: false,
    totalPostNumber: null,
    posts: [],
    post: null,
  },

  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setTotalPostsNumber: (state, action) => {
      state.totalPostNumber = action.payload.length;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const selectIsLoading = (state) => state.posts.isLoading;
export const selectTotalPostsNumber = (state) => state.posts.totalPostNumber;
export const selectPosts = (state) => state.posts.posts;
export const selectPost = (state) => state.posts.post;

export const {
  setTotalPostsNumber,
  setIsLoading,
  setPost,
  setPosts,
} = postSlice.actions;

export const getPost = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  getPostAPI(id).then((res) => {
    dispatch(setPost(res[0]));
    dispatch(setIsLoading(false));
  });
  return () => dispatch(setPost(null));
};

export const getPosts = () => (dispatch) => {
  getPostsAPI().then((res) => {
    dispatch(setTotalPostsNumber(res));
  });
};

export const getLimitedPosts = (page, limit) => async (dispatch) => {
  dispatch(setIsLoading(true));
  await getPostsAPI().then((res) => {
    dispatch(setTotalPostsNumber(res));
  });
  getLimitedPostsAPI(page, limit).then((res) => {
    dispatch(setPosts(res));
    dispatch(setIsLoading(false));
  });
};

export default postSlice.reducer;
