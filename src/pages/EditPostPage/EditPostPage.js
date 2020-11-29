import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NormalButton from '../../components/NormalButton';
import { selectUserId } from '../../redux/userSlice';
import {
  editPost,
  getPost,
  setErrorMessage,
  selectErrorMessage,
} from '../../redux/postsSlice';

const Root = styled.div`
  margin: 0 10vw;
  min-height: calc(100vh - 143px);
`;

const TitleWrapper = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  margin: 0px;
`;

const Form = styled.form`
  width: 460px;
  height: 390px;
  margin: 20px auto 0;
  padding: 10px 30px 30px 30px;
  background: whitesmoke;
  transition: all linear 0.2s;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: all linear 0.2s;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const InputHeader = styled.div`
  margin-bottom: 10px;
`;

const TitleInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #808080;
  outline: none;
  font-size: 16px;
`;

const BodyInput = styled.textarea`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #808080;
  outline: none;
  height: 150px;
  font-size: 16px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
`;

const SubmitButton = styled(NormalButton)`
  margin: 10px auto;
`;

export default function EditPostPage() {
  const { id } = useParams();
  const userId = useSelector(selectUserId);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector(selectErrorMessage);
  const setError = () => dispatch(setErrorMessage(null));
  const controlInput = (setValue) => (e) => setValue(e.target.value);

  useEffect(() => {
    dispatch(getPost(id)).then((res) => {
      if (res.userId !== userId) return navigate('/react-blog/');
      setTitle(res.title);
      setBody(res.body);
    });
  }, [dispatch, navigate, id, userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body || title.trim() === '' || body.trim() === '') {
      return dispatch(setErrorMessage('不能空白哦'));
    }
    dispatch(editPost({ id, title, body }));
    navigate('/react-blog/post/' + id);
  };

  return (
    <Root>
      <Form onSubmit={handleSubmit}>
        <TitleWrapper>
          <Title>編輯文章 #{id}</Title>
        </TitleWrapper>
        <InputWrapper>
          <InputHeader>標題：</InputHeader>
          <TitleInput
            value={title}
            onChange={controlInput(setTitle)}
            onFocus={setError}
          />
        </InputWrapper>
        <InputWrapper>
          <InputHeader>內容：</InputHeader>
          <BodyInput
            value={body}
            col="20"
            onChange={controlInput(setBody)}
            onFocus={setError}
          />
        </InputWrapper>

        <SubmitButton>送出文章</SubmitButton>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Form>
    </Root>
  );
}