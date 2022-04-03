import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

import { signOut } from "firebase/auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Navbar from "./Navbar";

import { auth } from "./Firebase";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
