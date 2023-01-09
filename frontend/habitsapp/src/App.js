import NavBar from "./components/Navigation/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import HeroPage from "./components/HeroPage";
import Habit from "./components/habit/Habit";
import ProfilePage from "./components/Navigation/ProfilePage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {user && <Route path="/" element={<HeroPage />} />}
          {!user && <Route path="/" element={<SignUp />} />}
          {!user && <Route path="/signup" element={<SignUp />} />}
          {!user && <Route path="/login" element={<Login />} />}
          {user && <Route path="/addHabit" element={<Habit />} />}
          {user && <Route path="/profile" element={<ProfilePage />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
