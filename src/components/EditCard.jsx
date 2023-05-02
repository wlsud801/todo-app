import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { editTodos } from '../api/todos';
import Button from '../ele/Button';


// defaultvalue = {
//   defaultvalue: todo,
//   editMode : editMode,
//   setEditMode : setEditMode,
// }
function EditCard({defaultvalue, editMode, setEditMode}) {
  console.log(defaultvalue)
  // console.log(setEditMode)
  const queryClient = useQueryClient();

  const mutation = useMutation(editTodos,{
    onSuccess: () => {
      queryClient.invalidateQueries('cards');  
      alert('수정이 완료되었습니다.')
    }
  });

  const navigate = useNavigate();

    // textarea에 입력하는 값 임시저장소
    const [editInput, setEditInput] = useState({
      id: defaultvalue.id,
      name: defaultvalue.name,
      title: defaultvalue.title,
      contents: defaultvalue.contents
    });
    
    const onChangeHandler = (input) => {
        const editTodo={
          id: defaultvalue.id,
          name: defaultvalue.name,
          title: defaultvalue.title,
          contents:input
        }
     
        setEditInput(editTodo);
    }

    const editsubmitHandler = () => {
        console.log(editInput)
        mutation.mutate(editInput);
        setEditMode(!editMode)
        // 수정완료되면 뒤로가서 리스트 보여주기
        // navigate(-1);
    }
  return (
    <EditCardContainer>
      <textarea value={editInput.contents} onChange={(e) => onChangeHandler(e.target.value)}></textarea>
      <Button className="SubmitBtn" onClick={() => {editsubmitHandler()}}>완료</Button>
    </EditCardContainer>
  )
}

export default EditCard;

const EditCardContainer = styled.div`
  width:100%;
  &>textarea{
    
  }
`