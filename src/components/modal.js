import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Appointment Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Appiled memebers details:</h4>
        <p>Username : {props.users.title}</p>
        <p>Gender : {props.users.gender}</p>
        <p>Age : {props.users.age}</p>
        <p>Date: {props.users.date}</p>
        <p>Time: {props.users.time}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const ReactModal = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const handleModalShow = () => {
    props.modalShow(false);
  };
  return (
    <>
      {console.log("valueFromProps", props.user)}
      <MyVerticallyCenteredModal
        show={props.modalValue}
        onHide={() => handleModalShow()}
        users={props.user}
      />
    </>
  );
};

export default ReactModal;
