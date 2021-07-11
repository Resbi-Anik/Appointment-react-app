import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setSelectYearValue } from "../redux/action/selectYear";
import { setSelectMonthValue } from "../redux/action/selectMonth";

const ReactDropdown = (props) => {
  const [selectValue, setSelectValue] = useState(props.currentTime);
  let history = useHistory();
  const handleChange = (e) => {
    setSelectValue(e.target.value);
    const setTime = e.target.value;
    if (props.type === "year") {
      history.push("/" + setTime + "/" + props.selectMonth);
      props.setSelectYearValue(setTime);
    } else {
      history.push("/" + props.selectYear + "/" + setTime);
      props.setSelectMonthValue(setTime);
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

function mapStateToProps(state) {
  return {
    selectMonth: state.userMonthReducer.selectMonth,
    selectYear: state.userYearReducer.selectYear,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectMonthValue: (data) => dispatch(setSelectMonthValue(data)),
    setSelectYearValue: (data) => dispatch(setSelectYearValue(data)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactDropdown);
