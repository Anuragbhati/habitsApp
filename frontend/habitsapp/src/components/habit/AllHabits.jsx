import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AllHabits = (props) => {
  const [allHabitss, setAllHabits] = useState([]);
  useEffect(() => {
    setAllHabits(() => {
      return [...allHabitss, props.users];
    });
  }, [props.users]);
  console.log(props.users);
  return (
    <div>
      hello
      {allHabitss?.map((item, index) => {
        console.log(item);
        return (
          <div key={index}>
            <li>{index}</li>
            {/* <li>{item.attributes.habitName}</li> */}
          </div>
        );
      })}
    </div>
  );
};

export default AllHabits;
