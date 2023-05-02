import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Layout from '../components/Layout'
import Button from '../ele/Button'
import { addTodos, getTodos } from '../api/todos';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

function Addtodo() {
  // 리액트 쿼리 관련 코드
  const queryClient = useQueryClient();

  const mutation = useMutation(addTodos,{
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      console.log('성공')
    }
  });

  const navigate = useNavigate();

  // Input값 임시저장소
  const [input, setInput] = useState({
    id:'',
    name:'',
    title:'',
    contents:''
  });

  // Input 값이 들어오면 setState 해주기
  const onChangeHandler = (e) => {
  setInput({...input,[e.target.name]: e.target.value})
  };

  // 값 저장하면 mutation되도록
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(input.name.length)
    
    if(input.name.length > 5 || input.title.length > 50 || input.contents.length > 200){
      alert('글자수 제한을 지켜주세요!')
    } else if(input.name.length == 0 || input.title.length == 0 || input.contents.length == 0){
      alert('내용을 모두 입력해주세요!')
    }else {
      const newTodo = {
        name: input.name,
        title: input.title,
        contents: input.contents
      }
  
      mutation.mutate(newTodo);
      setInput({name:'',title:'',contents:''});
      alert('할 일이 저장되었습니다.')
      navigate('/TodoList')
    }
  }
  

  return (
    <>
      <Layout>
        <StForm onSubmit={onSubmitHandler}>
          <label htmlFor='name'>작성자</label>
          {
            input.name.length > 5?
            <AlertText>이름은 5자 이내로 작성해주세요</AlertText>
            :
            null
          }
          <input type='text' name='name' value={input.name} onChange={onChangeHandler} placeholder='작성자의 이름을 입력해주세요.(5자 이내)'></input>
          <label htmlFor='title'>제목</label>
          {
            input.title.length > 50?
            <AlertText>제목은 50자 이내로 작성해주세요</AlertText>
            :
            null
          }
          <input type='text' name='title' value={input.title} onChange={onChangeHandler} placeholder='제목을 입력해주세요.(50자 이내)'></input>
          <label htmlFor='contents'>내용</label>
          {
            input.contents.length > 200?
            <AlertText>내용은 200자 이내로 작성해주세요</AlertText>
            :
            null
          }
          <textarea type='text' name='contents' value={input.contents} onChange={onChangeHandler} placeholder='내용을 입력해주세요.(200자 이내)'></textarea>
          <Button type="submit" className='SubmitBtn'>추가하기</Button>
        </StForm>
      </Layout>
    </>
    
  )
}

export default Addtodo

const StForm = styled.form`
  width:100%;

  &>label{
    display:inline-block;
    margin-top: 12px;
    font-size:1.2rem;
    font-weight:500;
    transform:translateX(10px);
  }
  &>input{
    display:block;
    width:100%;
    height:50px;
    border:none;
    border-radius:15px;
    padding:10px 20px;
    margin:10px 0;
    box-sizing:border-box;
    box-shadow:rgba(0, 0, 0, 0.4) 0px 1px 6px inset;
  }
  &>textarea{
    display:block;
    width:100%;
    height:200px;
    border:none;
    border-radius:15px;
    padding:10px 20px;
    margin:10px 0;
    box-sizing:border-box;
    box-shadow:rgba(0, 0, 0, 0.4) 0px 1px 6px inset;
  }
`
const AlertText = styled.span`
  float:right;
  transform:translate(-10px, 25px);
  color:#f85151;
  /* display:none; */
`
const StyeldLink = styled(Link)`
  position:relative;
  display:block;
  left:50%;
  width:200px;
  margin: 20px 0;
  transform:translateX(-50%);
  background-color:#f85151;
  color:#fff;
  border:none;
  border-radius:20px;
  padding:20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  font-size:1rem;
  text-align:center;
`