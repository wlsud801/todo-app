import React from 'react'
import Layout from '../components/Layout'

function Login() {
  return (
    <Layout>
        <div>
            <h1>Log In</h1>
            <input type='text'></input>
            <input type='password'></input>
            <button type='submit'>로그인</button>
            <button>회원가입</button>
        </div>
    </Layout>
  )
}

export default Login