import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { Link, Navigate, useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getCard, getTodos } from '../api/todos';
import Layout from '../components/Layout'
import Button from '../ele/Button';
import { BiRedo } from "react-icons/bi";
import ShowCard from '../components/ShowCard';
import EditCard from '../components/EditCard';
import Loading from './Loading';

function Detail() {
  const testLocation = useLocation();
  const todo = testLocation.state; // {"초기 내용이에요."}
  console.log(todo.id) // 1
  // console.log(typeof todo.id) // number

  // useEffect(() => {
  //   setCard(card)
  // }, [card])

// function 함수(인자){
//   console.log(인자) // 1.번 케이스에서는 event가 찍힘.
//   // 2번 케이스에서는 params가 찍힘.
// }

// 차이점!
//1. onClick = {함수} // 얘는 parameter를 받는 자리가 없어서 무조건 event라는 객체밖에 못 넘어감.
//2. onClick = {() => 함수(params)} // 얘는 넘겨줄 params를 지정해 줄 수 있음.

  const navigate = useNavigate();
  // useQuery 는 Get방식. Get방식(useQuery)쓰면서 querykey 이름을 정할 수 있어요.(첫 번째 인자가 쿼리 키 이름 자리!)
  // const {isLoading, isError, data} = useQuery("todos", getTodos);
  const {isLoading, isError, data} = useQuery("cards", ()=>getCard(todo.id));
  
  const [editMode, setEditMode] = useState(false);
  
  const editModeHandler = () =>{
    console.log('모드전환')
    setEditMode(!editMode);
  }

  if(isLoading){
    return <Loading />
  }
  if(isFetching){
    return <Loading />
  }
  if(isError){
    return <h1>오류가 발생하였습니다...</h1>
  }

  return (
    <>
      <Layout>
        <StCard>
          <StCardHeader>
            <CardID>{data.id}</CardID>
            <CardName>{data.name}</CardName>
            <Button className="circle" onClick={() => navigate(-1)}><BiRedo /></Button>
          </StCardHeader>
          <CardTitle>{data.title}</CardTitle>
          {
            editMode === true?
              <EditCard
              defaultvalue={data}
              editMode={editMode}
              setEditMode={setEditMode}
               />
            :
              <>
                <ShowCard 
                  value={data.contents}
                />
                <Button className="SubmitBtn" onClick={() => {editModeHandler()}}>수정하기</Button>
              </>
              
          }
          {/* <StComments>
            <p>댓글</p>
          </StComments> */}
        </StCard>
      </Layout>
    </>
  )
}

export default Detail;

const StCard = styled.article`
  width:100%;
  background-color:#fff;
  border-radius:15px;
  box-shadow:rgba(0, 0, 0, 0.3) 0px 1px 4px;
  padding:30px;
  box-sizing:border-box;
`
const StCardHeader = styled.div`
  display:flex;
  width:100%;
`
const CardID = styled.p`
  width:25px;
  height:25px;
  background-color:#f85151;
  border-radius:50%;
  color:#fff;
  font-size:15px;
  text-align:center;
  line-height:25px;
  margin-right:10px;
`
const CardName = styled.p`
  width:calc(100% - 70px);
  font-weight:700;
  font-size:1rem;
`
const CardTitle = styled.p`
  font-size:1.5rem;
  font-weight:700;
`
const StComments = styled.div`
  border-top: 1px solid #ccc;
`

