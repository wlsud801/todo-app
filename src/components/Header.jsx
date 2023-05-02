import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
        <h1 className='logo' onClick={()=> navigate('/')}><span className="red">To do</span> List.</h1>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.header`
  display:flex;
  justify-content:center;
  /* padding:30px 0; */

  &>.logo{
    text-decoration: none;
    outline: none;
    font-size:3rem;
    font-weight: 900;
    line-height: 40px;
    cursor:pointer;
  }
  &>.logo:visited{
    text-decoration: none;
    outline: none;
  }
`

