import NavBar from "./components/Navigation/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import HeroPage from "./components/HeroPage";
import Habit from "./components/habit/Habit";
import ProfilePage from "./components/Navigation/ProfilePage";
import { useState, createContext, useEffect } from "react";
export const AppContext = createContext();
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [flag, setFlag] = useState(false);
  console.log(flag);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [flag]);
  return (
    <div className="App">
      <AppContext.Provider value={{ flag, setFlag }}>
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
      </AppContext.Provider>
    </div>
  );
}

export default App;
