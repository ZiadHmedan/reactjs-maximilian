import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const overlays = document.getElementById("overlays");
const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClose}></div>
);
const ModalOverlays = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, overlays)}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        overlays
      )}
    </>
  );
};

export default Modal;
