import React, { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";
import modalStyle from "./Modal.module.css";
import PropTypes from "prop-types";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

const modalRoot = document.querySelector("#react-modal");

const Modal = (props) => {
  useEffect(() => {
    const handleEsc = (e) => {
      e.key === "Escape" && props.close();
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return createPortal(
    <>
      <div className={modalStyle.box}>
        <h3
          className={`${modalStyle.title} text text_type_main-large pt-15 pb-1 pl-10`}
        >
          {props.text}
        </h3>
        <button onClick={props.close} className={modalStyle.closeBtn}>
          {<CloseIcon />}
        </button>
        {props.children}
      </div>
      <ModalOverlay close={props.close} />
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

export { Modal };