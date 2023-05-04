import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../components/GloabalStyles";
import Addtodo from "../pages/Addtodo";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import TodoList from "../pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Addtodo" element={<Addtodo />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/:id" element={<Detail />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router