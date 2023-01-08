import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const [userHabits, setUserHabits] = useState([]);
  const getUserHabits = async (val) => {
    await axios
      .get(
        `http://localhost:1337/api/habits?populate=*&filters[user][id][$eq]=${val}`
      )
      .then((response) => {
        console.log(response.data.data);
        return setUserHabits((prev) => {
          return [...prev, ...response.data.data];
        });
      });
  };
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));

    setUserData({ ...userData, ...user });

    getUserHabits(user.id);
    console.log(userHabits);
  }, []);
  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{userData.username}</h5>
                  <p className="text-muted mb-1">{userData.email}</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      Follow
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-1"
                    >
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body " style={{ height: "100%" }}>
                  <div className="row py-4">
                    <div className="col-sm-3 ">
                      <p className="mb-0"> Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{userData.username}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-4">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{userData.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-4">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card mb-4">
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Habit</th>
                        <th scope="col">user</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userHabits?.map((habit, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{habit.attributes.habitName}</td>
                            <td>
                              {habit.attributes.user.data.attributes.username}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
