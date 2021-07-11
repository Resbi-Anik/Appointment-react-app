import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setUserValue } from "../redux/action/form";
import styled from "styled-components";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    value["end"] = value.start;
    props.setUserValue(value);
    reset();
  };

  const Label = styled.label`
    width: 20%;
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const LabelGender = styled.label`
    width: 20%;
    font-size: 1.5em;
    text-align: center;
    color: black;
  `;

  const SubmitButton = styled.span`
    width: 20%;
    font-size: 1.5em;
    text-align: center;
    color: green;
  `;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <label>Name :</label>
        </Label>
        <input
          type="text"
          placeholder="username"
          {...register("title", { required: true })}
        />
        {errors.username && <span>Name is required</span>}
        <br />
        <Label>
          <lebel>Age</lebel>
        </Label>
        <input
          type="number"
          {...register("age", { required: true, maxLength: 2 })}
        />
        {errors.age && <span>Age is required and should be less then 100</span>}
        <br />
        <Label>
          <label>Gender :</label>
        </Label>
        <input
          type="radio"
          value="male"
          {...register("gender", { required: true })}
        />
        <LabelGender>
          <label for="male">Male</label>
        </LabelGender>
        <input
          type="radio"
          ue="female"
          {...register("gender", { required: true })}
        />{" "}
        <LabelGender>
          <label for="female">Female</label>
        </LabelGender>
        {errors.gender && <span>Select the gender</span>}
        <br />
        <Label>
          <label>Date</label>
        </Label>
        <input
          type="date"
          {...register("start")}
          min={new Date().toISOString().substring(0, 10)}
        />
        <br />
        <Label>
          <label> Time</label>
        </Label>
        <input type="time" {...register("time")} />
        <br />
        <SubmitButton>
          <span>
            <input type="submit" />
          </span>
        </SubmitButton>
      </form>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setUserValue: (data) => dispatch(setUserValue(data)),
  };
}
export default connect(null, mapDispatchToProps)(Form);
