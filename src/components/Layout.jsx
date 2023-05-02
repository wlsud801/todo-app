import React from 'react'
import styled from 'styled-components'
import Header from './Header'

function layout({children}) {
  return (
    <>
        <Header />
        <Layout>
            {children}
        </Layout>
    </>
    
  )
}

export default layout;

const Layout = styled.div`
    max-width:960px;
    margin:0 auto;
    @media screen and (max-width: 960px) {
        max-width: 100%;
    }
`