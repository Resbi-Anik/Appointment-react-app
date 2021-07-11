import React, { useState } from "react";
import ReactModal from "./components/modal";

import ReactCalendar from "./components/reactCalendar";
import Button from "react-bootstrap/Button";
function App() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    console.log("triggered");
    setModal(false);
  };
  const handleButtonForm = () => {
    setModal(true);
  };
  return (
    <div>
      <Button variant="success" onClick={handleButtonForm}>
        Create Form
      </Button>
      <ReactModal
        createModalValue={modal}
        createAppointment
        createModalShow={handleModal}
        // user={userDetails}
      />
      <ReactCalendar />
    </div>
  );
}

export default App;
