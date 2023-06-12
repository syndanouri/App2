import React, { useEffect, useState } from "react";
import { listOfUser } from "../api/userApi";
import { deleteLocalStorage } from "../components/helpers/localStorage";
import { deleteCoockie } from "../components/helpers/cookies";
import { useNavigate } from "react-router-dom";
const AdminDash = () => {
  const [value, setValue] = useState([]);
  const navigate = useNavigate();
  console.log(value);
  const getUsers = async () => {
    await listOfUser()
      .then((res) => {
        setValue(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logout = () => {
    deleteLocalStorage("user");
    deleteCoockie("token");
    navigate("/login");
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>AdminDash</h1>
      <button onClick={() => logout()}>logout</button>
      {value.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.email}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default AdminDash;
