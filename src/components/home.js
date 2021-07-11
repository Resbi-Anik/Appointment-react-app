import React, { useState } from "react";
import ReactModal from "./modal";
import {
    useParams,
  } from "react-router-dom";
import ReactCalendar from "./reactCalendar";
import Button from "react-bootstrap/Button";
import ReactDropdown from "./dropdowns";
const Home = (props) => {
    let { year, month } = useParams();
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    console.log("triggered");
    setModal(false);
  };
  const handleButtonForm = () => {
    setModal(true);
  };
  console.log("year",year,month);
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
      <ReactCalendar yearValue={year} monthValue={month}/>
    </div>
  );
}

export default Home;
