import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Post from '../../components/Post';
import Loading from '../../components/Loading';
import styled from 'styled-components';
import { getPost, selectIsLoading, selectPost } from '../../redux/postSlice';

const Root = styled.div`
  margin: 0 10vw;
  min-height: calc(100vh - 123px);
`;

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const post = useSelector(selectPost);
  useEffect(() => dispatch(getPost(id)), [dispatch, id]);

  return <Root>{!isLoading && post ? <Post post={post} /> : <Loading />}</Root>;
}
