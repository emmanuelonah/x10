import styled from 'styled-components';

const Form = styled.form`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.dark200};
  border: 3px solid transparent;
  margin: 0 auto;
  height: 70px;
  width: 90%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatBox = styled.textarea`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white400};
  height: 100%;
  line-height: 100%;
  resize: none;
  width: 70%;

  &[placeholder] {
    padding: 0.7rem 0rem;
  }
`;

const ImageInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

const ImageInputLabel = styled.label`
  color: ${({ theme }) => theme.colors.white400};
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const SubmitButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white400};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Form, ChatBox, ImageInput, ImageInputLabel, SubmitButton };
