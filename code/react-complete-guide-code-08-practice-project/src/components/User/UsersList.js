import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={Math.random().toString()}>
              {user.username} is {user.age}{" "}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UsersList;
