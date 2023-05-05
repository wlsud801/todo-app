import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import styled from 'styled-components';
import { getTodos, removeTodos } from '../api/todos'
import Button from '../ele/Button';
import Layout from '../components/Layout';
import {BiFontSize, BiTrash} from "react-icons/bi"
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

function TodoList() {

  // react query (4가지 axios 요청을 대응하는 방식이 있어요.)
  // get 방식은 useQuery를 통해서 불러오는 방식
  // 나머지 post, delete, fetch 방식은 모두 useMutaton을 통해서 수행함.
  const {isLoading, isError, data} = useQuery("todos", getTodos);
  console.log(data)
  const navigate = useNavigate();
  
// ---------------------------------------------------------------

  // react query에도 여러가지 hook이 있음.
  // useQueryClient 훅을 호출하게 되면 post, delete, fetch 방식을 사용을 했을 때 데이터를 담을 수 있게 해줌.
  const queryClient = useQueryClient();

  // useMutation은 변화를 시키는 훅. 
  // 첫 번째 인자로 어떤 api를 사용할 것인지 적어줌.
  // 두 번째 인자로는 try catch문과 유사한 객체를 적어줌.
  const mutation = useMutation(removeTodos,{
    // promise의 try catch문과 99%유사한 기능.
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      console.log('성공')
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const handleClick = (todo) => {
    navigate(`/${todo.id}`,{state: todo});
  };

  const removeHandler = (id) => {
    // 이벤트 버블링방지
    // remove버튼을 클릭하면 li태그가 감싸고 있기때문에 li에 있는 onClick이벤트까지 버블링이 일어남
    id.stopPropagation();
    // mutate라는 메서드를 사용하면 api가 받아야 하는 parameter를 첫 번째 인자로 넘겨야 함.
    mutation.mutate(id);
  };

  if(isLoading){
    return <Loading />
  };
  if(isError){
    return <h1>오류가 발생하였습니다...</h1>
  };
  return (
      <Layout >
        <StList>
          {data.map((todo) => 
            <li key={todo.id} onClick={() => {handleClick(todo)}}> 
              <StID>{todo.id}</StID>
              <StText>
                <StTitle>{todo.title}</StTitle>
                <StContent>{todo.contents}</StContent>
              </StText>
              <Button className="circle deleteBtn" onClick={()=>removeHandler(todo.id)}><BiTrash /></Button>
            </li>
          )}
        </StList>
      </Layout>
  )
}

export default TodoList;

const StList = styled.ul`
  &>li{
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100%;
    height:100px;
    background-color:#fff;
    border-radius:15px;
    box-shadow:rgba(0, 0, 0, 0.3) 0px 1px 4px;
    margin-bottom: 20px;
    cursor:pointer;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px inset;
    }
  }
  &>.deleteBtn{
    position:absolute;
    z-index:10;
  }
`
const StID = styled.p`
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:#f85151;
  font-size:13px;
  text-align:center;
  line-height:40px;
  color:#fff;
`
const StText = styled.p`
  width:calc(100% - 200px);
`
const StTitle = styled.span`
  display:block;
  margin:0;
  font-weight:700;
  width:100%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`
const StContent = styled.span`
  display:block;
  margin:0;
  width:100%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`
