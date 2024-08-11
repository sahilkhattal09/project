import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";

import Login from "./Pages/LogIn";
import Header from "./Components/UI/Header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}
