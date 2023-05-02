import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat','Noto Sans KR', sans-serif;
    line-height: 1.5;
    background-color: #f2f3f4d9;
    padding:0 20px;
  }
  a{
    font-family: 'Montserrat','Noto Sans KR', sans-serif;
    color: #333;
    all : unset;
  }
  ul,ol,dl{
    list-style:none;
  }
  button{
    cursor:pointer;
    font-family: 'Montserrat','Noto Sans KR', sans-serif;
  }
  input{
    font-family: 'Noto Sans KR', sans-serif;
    font-size:1rem;
  }
  textarea{
    font-family: 'Noto Sans KR', sans-serif;
    width:100%;
    min-height:200px;
    border-radius:10px;
    padding:10px;
    box-sizing:border-box;
    font-size:1rem;
  }
  .red{
    color:#f85151;
  }
  :root{
    --primary-color: #f85151;
  }
`;


export default GlobalStyle;