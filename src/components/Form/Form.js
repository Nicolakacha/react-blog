import styled from 'styled-components';

const Form = styled.form`
  height: auto;
  min-height: 290px;
  max-width: ${(props) => props.$width}px;
  margin: 35px auto 0;
  padding: ${(props) =>
    props.$paddingType === 'post' ? '10px 30px 30px 30px' : '20px'};
  background: whitesmoke;
  transition: all linear 0.2s;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: all linear 0.2s;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);
  }
`;

export default Form;
