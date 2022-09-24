import React from "react";
import { FaTimes } from "react-icons/fa";
import { useContextApp } from "./context/context";

const Modal = () => {
  const { setModal, modal } = useContextApp();
  return (
    <>
      <section className={`${modal ? "overlay" : " show-overlay"}`}>
        <section className="content">
          <h2 className="content--text">modal text</h2>
          <div className="close--modal" onClick={() => setModal(false)}>
            <FaTimes />
          </div>
        </section>
      </section>
    </>
  );
};

export default Modal;
