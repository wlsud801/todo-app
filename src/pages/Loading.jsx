import React from 'react'
import { TbFlower } from "react-icons/tb";
import styled from 'styled-components';

function Loading() {
  return (
    <LoadingPage>
        <TbFlower className="flower"/>
        <p>로딩중입니다</p>
        <p>잠시만 기다려주세요</p>
    </LoadingPage>
  )
}

export default Loading

const LoadingPage = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:300px;
    height:300px;
    text-align:center;
    color:#f85151;
    font-size:1.5rem;
    font-weight:500;
    & > .flower{
        font-size:8rem;
        animation:flower 4s linear infinite;;
        @keyframes flower {
            100% {
                transform:rotate(360deg);
            } 
        }
    }
`
