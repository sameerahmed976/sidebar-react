import React from "react";
import { useContextApp } from "./context/context";
import Modal from "./Modal";

const Sidebar = () => {
  const { setModal } = useContextApp();

  return (
    <>
      <section className="modal__container">
        <button className="btn btn--modal" onClick={() => setModal(true)}>
          show modal
        </button>
      </section>

      <Modal />
    </>
  );
};

export default Sidebar;
