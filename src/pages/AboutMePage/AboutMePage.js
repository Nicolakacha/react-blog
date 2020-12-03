import styled from 'styled-components';

const Root = styled.div`
  margin: 0 10vw;
  height: calc(100vh - 133px);
`;

const Container = styled.div`
  max-width: 600px;
  height: 400px;
  margin: 50px auto 0;
  padding: 20px;
  background: rgba(210, 210, 210, 0.4);
  text-align: center;
  transition: all linear 0.2s;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: all linear 0.2s;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.h1`
  font-size: 36px;
`;

const Content = styled.div`
  text-align: left;
`;

export default function AboutMePage() {
  return (
    <Root>
      <Container>
        <Title>A Simple Blog</Title>
        <Content>
          利用 React 實作 SPA 部落格～
          <br/><br/>
          從文學到程式，對各種領域充滿好奇，參與 Lidemy 程式導師計畫自此打開程式開發的大門，認為網路是超棒的知識載體，以不斷成長的前端工程師為目標，並期許自己在渴望新事物的同時，也能成為帶來新事物的人。
        </Content>
      </Container>
    </Root>
  );
}
