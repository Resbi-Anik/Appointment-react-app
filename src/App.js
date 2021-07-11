import React, { useState } from "react";
// import ReactModal from "./components/modal";
import Form from "./components/form";
import ReactCalendar from "./components/reactCalendar";
import Button from 'react-bootstrap/Button'
function App() {
  const handleButtonForm =()=>{
    
  }
  return (
    <div>
      <Form />
      <Button variant="success" onClick={handleButtonForm}>Create Form</Button>
     <ReactCalendar />
    </div>
  );
}

export default App;
