import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getPost } from '../../WebAPI';
import Post from '../../components/Post';

const Root = styled.div`
  margin: 0 10vw;
  min-height: 85vh;
`;

export default function PostPage() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPost(id).then((post) => setPost(post[0]));
  }, [id]);

  return <Root>{post && <Post post={post} />}</Root>;
}
