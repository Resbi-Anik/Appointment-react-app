import React, { useState } from "react";
import ReactModal from "./modal";
import { useParams } from "react-router-dom";
import ReactCalendar from "./reactCalendar";
import Button from "react-bootstrap/Button";
import ReactDropdown from "./dropdowns";
import SelectYear from "../constant/year";
import SelectMonth from "../constant/month";
import styled from "styled-components";

const Home = (props) => {
  let { year, month } = useParams();
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(false);
  };
  const handleButtonForm = () => {
    setModal(true);
  };

  const CreateButton = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  return (
    <div>
      <CreateButton>
        <Button variant="success" onClick={handleButtonForm}>
          Create Appointment
        </Button>
      </CreateButton>
      <ReactDropdown
        value={SelectYear}
        currentTime={new Date().getFullYear()}
        type="year"
      />
      &nbsp; &nbsp; &nbsp;
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
