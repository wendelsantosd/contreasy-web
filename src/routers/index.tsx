import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";

export const Router = () =>
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Login />} />
    </Routes>
  </BrowserRouter>