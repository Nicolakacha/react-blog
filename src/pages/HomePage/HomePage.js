import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPosts } from '../../WebAPI';
import Post from '../../components/Post';

const Root = styled.div`
  margin: 0 10vw;
`;

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  });

  return (
    <Root>
      {posts.slice(0, 5).map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Root>
  );
}
