import React from 'react'
import styled, { css } from 'styled-components';

function Button({children, ...rest}) {
  return (
    <StButton {...rest}>
        {children}
    </StButton>
  )
}

export default Button;


const StButton = styled.button`
    &.MenuBtn{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        min-height:100px;
        padding: 0 40px;
        margin-bottom: 20px;
        border:none;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
        background-color:#fff;
        font-size:1.2rem;
        text-align:left;
        font-weight:500;

        &>.icon{
            color:#f85151;
            font-size:35px;
        }
    }

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px inset;
    }

    &.SubmitBtn{
        position:relative;
        left:50%;
        width:50%;
        margin: 20px 0;
        transform:translateX(-50%);
        background-color:#f85151;
        color:#fff;
        border:none;
        border-radius:20px;
        padding:20px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
        font-size:1rem;
    }

    &.SubmitBtn:hover{
        box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 4px inset;
    }

    &.circle{
        width:50px;
        height:50px;
        border-radius:50%;
        border:none;
        box-shadow:rgba(0, 0, 0, 0.3) 0px 1px 4px;
        font-size:20px;
        color:#f85151;
        line-height:10px;
        transition:.3s;
        &:hover{
            background-color:#f85151;
            color:#fff;
        }
    }
`
