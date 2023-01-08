import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Habit = () => {
  let navigate = useNavigate();
  const [newHabit, setNewHabit] = useState("");
  const [habits, setHabits] = useState([]);
  let [habitLimit, setHabitLimit] = useState(0);
  useEffect(() => {
    getUserHabits();
  }, []);
  const getUserHabits = () => {
    axios
      .get(
        `http://localhost:1337/api/habits?populate=*&filters[user][id][$eq]=1`
      )
      .then((res) => {
        setHabits(res.data.data);
        setHabitLimit((habitLimit = res.data.data.length));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAddHabit = async (e) => {
    e.preventDefault();
    if (habits !== "" && habitLimit < 5) {
      await axios
        .post("http://localhost:1337/api/habits", {
          data: {
            habitName: newHabit,
            user: 1,
          },
        })
        .then((res) => {
          // console.log(res);
          alert("habit added");
          navigate("/profile");
        })
        .catch(() => {
          console.log("error");
        });
    } else {
      alert("you cant add new habit due to quota exceeded");
    }
  };
  return (
    <div>
      <form className="container mt-5 bg-info p-5 rounded">
        <div>
          <label className="form-label text-light" htmlFor="habit">
            ADD HABIT PAGE
          </label>
          <br />
          <input
            type="text"
            id="habit"
            className="form-control"
            placeholder="enter your habit"
            onChange={(e) => {
              setNewHabit(e.target.value);
            }}
          />
        </div>
        <br />
        <button onClick={handleAddHabit} className="btn btn-primary">
          Add habit
        </button>
      </form>
    </div>
  );
};

export default Habit;
