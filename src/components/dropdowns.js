import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ReactDropdown = (props) => {
  const [selectValue, setSelectValue] = useState(props.currentTime);
  let history = useHistory();
  const handleChange = (e) => {
    setSelectValue(e.target.value);
    const setTime = e.target.value;
    if(props.type==='year'){
        history.push('/'+setTime+'/7')
    } 
    else{
        history.push('/2021/'+setTime)
    }
   
  };
  return (
    <>
      <select name="cars" id="cars" value={selectValue} onChange={handleChange}>
        {props.value.map((propValue, key) => {
          return <option value={propValue}>{propValue}</option>;
        })}
      </select>
    </>
  );
};

export default ReactDropdown;
