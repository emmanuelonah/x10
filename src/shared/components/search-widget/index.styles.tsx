import styled from 'styled-components';

const Form = styled.form`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.dark200};
  border: 1px solid ${({ theme }) => theme.colors.dark400};
  margin: 0 auto;
  height: 50px;
  width: 90vw;
  padding: 10px 0 10px 20px;
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
    padding: 0.5rem 0rem;
    font-size: 0.8rem;
  }
`;

const ImageInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

const ImageInputLabel = styled.label`
  color: ${({ theme }) => theme.colors.white400};
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.neutral400};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white400};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  padding: 0.5rem;
  position: relative;

  &:hover {
    opacity: 0.8;
  }
`;

export { Form, ChatBox, ImageInput, ImageInputLabel, SubmitButton };
