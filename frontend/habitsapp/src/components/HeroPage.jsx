import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import AllHabits from "./habit/AllHabits";

const HeroPage = () => {
  const [allHabits, setAllHabits] = useState(null);
  const [flag, setFlag] = useState(false);
  const getAllHabits = async () => {
    await axios
      .get(`http://localhost:1337/api/habits?populate=*`)
      .then((res) => {
        setAllHabits((prev) => [...res.data.data]);
        // console.log(res.data.data);
        return setFlag(true);
      })
      .catch((err) => {
        alert("Something Went Really Wrooong!!!! ");
        return setFlag(false);
      });
  };

  useEffect(() => {
    getAllHabits();
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Habit</th>
            <th scope="col">user</th>
          </tr>
        </thead>
        <tbody>
          {allHabits?.map((habit, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{habit.attributes.habitName}</td>
                <td>{habit.attributes.user.data.attributes.username}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={() => navigate("/addHabit")}>
        Create new Habit
      </button>
    </div>
  );
};

export default HeroPage;
