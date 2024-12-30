import { React, useState } from "react";
// import ShowUser from "./ShowUser";
import { v4 as uuid } from "uuid";
import { Button, Flex } from "antd";

const Home = () => {
  //Creating a State Variable to store the data's
  const [users, setUsers] = useState([]);
  const [buttonState, setButtonState] = useState("add");

  //  Handle this info
  const [userInfo, setUserInfo] = useState({
    id: uuid(),
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const addData = () => {
    if (
      !userInfo.name.trim() ||
      !userInfo.age.trim() ||
      !userInfo.email.trim() ||
      !userInfo.phone.trim()
    ) {
      alert("All fields are required!");
      return;
    }
    setUsers((currUsers) => [...currUsers, userInfo]);
    setUserInfo({
      id: uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
    });
  };

  // Deleting the Data's
  const deleteData = (id) => {
    setUsers((currUsers) => {
      return currUsers.filter((user) => {
        return user.id !== id;
      });
    });
  };

  const startEditing = (user) => {
    setUserInfo(user);
    setButtonState("edit");
  };

  const cancelEditing = () => {
    setUserInfo({
      id: uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
    });
    setButtonState("add");
  };

  const updateData = (updatedInfo) => {
    setUsers((currUsers) => {
      return currUsers.map((user) => {
        if (user.id === userInfo.id) {
          return userInfo;
        }
        return user;
      });
    });
    cancelEditing();
  };

  return (
    <>
      <div className="container">
        <h1>Create Users </h1>
      </div>
      <div className="container">
        <div className="form">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={userInfo.name}
            onChange={handleChange}
            name="name"
          />
          <br />
          <input
            type="number"
            placeholder="Enter Your Age"
            name="age"
            value={userInfo.age}
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Enter Your Phone"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
          />
          <br />
          {buttonState === "add" ? (
            <Button
              type="primary"
              title="Enter the Details & Click to add a user"
              onClick={addData}
            >
              Add
            </Button>
          ) : (
            <div>
              <Button type="primary" onClick={updateData}>
                Update
              </Button>
              <hr />
              <Button type="primary" onClick={cancelEditing}>
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="datatable">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <button onClick={() => startEditing(user)}>Edit</button>
                      <button onClick={() => deleteData(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
