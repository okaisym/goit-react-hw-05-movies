import styled from '@emotion/styled';

export const BtnSubmit = styled.button`
color: #7cb9e8;
  font-size: 14px;
  font-weight: 500;
  border: 1.4px solid #7cb9e8;
  padding: 6px 10px;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #7cb9e8;
    color: #fff;
  }

  transition: background-color 0.6s ease;
`

export const FormContainter = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`

export const Input = styled.input`
outline: none;
border: transparent;
background-color: #7cb9e8;
color: #fff;
width: 255px;
margin-right: 20px;
height: 30px;
border-radius: 6px;
padding-left: 15px;`

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;`