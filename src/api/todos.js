// axios 요청이 들어가는 모든 모듈
import axios from "axios";

// 조회
const getTodos = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
    return response.data;
};

// 부분조회
const getCard = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
    return response.data;
};

// 추가
const addTodos = async (newTodo) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

// 수정
const editTodos = async (newTodo) => {
    await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${newTodo.id}`, newTodo);
};

// 삭제
const removeTodos = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
    // await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/1`)
};

// axios에는 4가지 요청이 있어요 (get, post, delete, fetch )

export { getTodos, addTodos, removeTodos, editTodos, getCard };