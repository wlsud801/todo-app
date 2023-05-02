import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import GlobalStyles from '../components/GloabalStyles';
import Button from '../ele/Button';
import { BsFillGridFill, BsPlusCircleFill } from "react-icons/bs";

function Home() {
  const navigate = useNavigate();
  return (
    <>  
      <Layout>
          <h2>What you have <span className='red'>to do</span> today?</h2>
          <Button 
            className="MenuBtn" 
            onClick={() => {navigate('/Addtodo')}}>
            할 일 추가하기<BsPlusCircleFill className='icon'/>
          </Button>
          <Button 
            className="MenuBtn" 
            onClick={() => {navigate('/TodoList')}}>
            할 일 목록보기<BsFillGridFill className='icon'/>
          </Button>
      </Layout>
    </>
    
  )
}

export default Home