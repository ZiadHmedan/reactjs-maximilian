import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

const App = () => {
  const [enteredData, setEnteredData] = useState([]);

  const getDataUsersList = (users) => {
    setEnteredData((prevUsersList) => {
      return [...prevUsersList, users];
    });

    // const usersList = [users, ...enteredData];
    // setEnteredData(usersList);
  };
  console.log(enteredData);
  return (
    <>
      <AddUser onGetDataUsersList={getDataUsersList}></AddUser>
      <UsersList users={enteredData}></UsersList>
    </>
  );
};

export default App;
