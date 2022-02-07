import React, { useState } from "react";
import Modal from "./components/Modal.js";

export default function App() {

  return (
    <div className="App">
        <Modal show={true} message={"This is a reusable modal"}>
        </Modal>
    </div>
  );
}