import React from 'react';
import styled from 'styled-components';
import Bean from '../../images/bean.svg';

function LoadingPicture() {
  return (
    <object type="image/svg+xml" data={Bean}>
      svg-animation
    </object>
  );
}

const LoadingWrapper = styled.div`
  padding-top: 150px;
  margin: 0 auto;
  text-align: center;
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <LoadingPicture />
    </LoadingWrapper>
  );
}
