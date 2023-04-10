import React from "react";
import ReactDom from "react-dom";

import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
export const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

export const Backdrop = (props) => {
  return <div className={classes.backdrop} onConfirm={props.onConfirm} />;
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("Backdrop--root")
      )}
      {ReactDom.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal--root")
      )}
    </>
  );
};

export default ErrorModal;
