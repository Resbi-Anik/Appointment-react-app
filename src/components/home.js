import React, { useState } from "react";
import ReactModal from "./modal";
import { useParams } from "react-router-dom";
import ReactCalendar from "./reactCalendar";
import Button from "react-bootstrap/Button";
import ReactDropdown from "./dropdowns";
import SelectYear from "../constant/year";
import SelectMonth from "../constant/month";

const Home = (props) => {
  let { year, month } = useParams();
  const [modal, setModal] = useState(false);
  const handleModal = () => {
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
      <ReactDropdown
        value={SelectYear}
        currentTime={new Date().getFullYear()}
        type="year"
      />
      <ReactDropdown
        value={SelectMonth}
        currentTime={new Date().getMonth() + 1}
      />
      <ReactModal
        createModalValue={modal}
        createAppointment
        createModalShow={handleModal}
      />
      <ReactCalendar yearValue={year} monthValue={month} />
    </div>
  );
};

export default Home;
