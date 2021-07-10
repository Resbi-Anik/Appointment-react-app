import React from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (value) => {
    console.log(value);
  };
  const dateReceived = watch("expiryAt");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name :</label>
        <input
          type="text"
          placeholder="username"
          {...register("username", { required: true })}
        />
        {errors.username && <span>Name is required</span>}
        <br />

        <lebel>Age</lebel>
        <input
          type="number"
          {...register("age", { required: true, maxLength: 2 })}
        />
        {errors.age && <span>Age is required and should be less then 100</span>}
        <br />

        <label>Gender :</label>

        <label for="male">Male</label>
        <input
          type="radio"
          value="male"
          {...register("gender", { required: true })}
        />
        <label for="female">Female</label>
        <input
          type="radio"
          ue="female"
          {...register("gender", { required: true })}
        />
        {errors.gender && <span>Select the gender</span>}
        <br />
        <label>Date</label>
        <input type="date" {...register("date")} />
        <br />
        <label> Time</label>
        <input type="time" {...register("time")} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Form;
