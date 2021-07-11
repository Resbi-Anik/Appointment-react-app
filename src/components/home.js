import React, { useState } from "react";
import ReactModal from "./modal";

import ReactCalendar from "./reactCalendar";
import Button from "react-bootstrap/Button";
import ReactDropdown from "./dropdowns";
const Home = () => {
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
        Create Appointment
      </Button>
      <ReactDropdown />
      <ReactModal
        createModalValue={modal}
        createAppointment
        createModalShow={handleModal}
      />
      <ReactCalendar />
    </div>
  );
}

export default Home;
