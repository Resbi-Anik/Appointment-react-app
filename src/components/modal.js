import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "./form";
import "bootstrap/dist/css/bootstrap.min.css";

const ShowUsers = (props) => {
  console.log("props.users", props.users);
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
        {props.users ? (
          <div>
            <h4>Appiled memebers details:</h4>
            <p>Username : {props.users.title}</p>
            <p>Gender : {props.users.gender}</p>
            <p>Age : {props.users.age}</p>
            <p>Date: {props.users.start}</p>
            <p>Time: {props.users.time}</p>
          </div>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const CreateUsers = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Appointment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form />
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

  const handleCreateModalShow = () => {
    props.createModalShow(false);
  };
  return (
    <>
      {console.log("valueFromProps", props.createModalValue)}
      {props.createAppointment ? (
        <CreateUsers
          show={props.createModalValue}
          onHide={() => handleCreateModalShow()}
          // users={props.user}
        />
      ) : (
        <ShowUsers
          show={props.modalValue}
          onHide={() => handleModalShow()}
          users={props.user}
        />
      )}
    </>
  );
};

export default ReactModal;
