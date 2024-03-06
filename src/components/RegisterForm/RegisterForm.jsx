import { useState } from "react";
import MyInput from "../../UI/MyInput/MyInput";
import styles from "./RegisterForm.module.css";

const RegisterForm = ({ onSubmit }) => {
  let formData = {
    name: "",
    email: "",
    age: "",
    password: "",
  };

  const handleChange = (event) => {
    formData = { ...formData, [event.target.name]: event.target.value };
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e, formData)}
      className={styles.registerForm}
    >
      <h2>Register Form</h2>
      <MyInput
        type="text"
        name="name"
        placeholder="name..."
        onChange={handleChange}
      />
      <MyInput
        type="email"
        name="email"
        placeholder="email..."
        onChange={handleChange}
      />
      <MyInput
        type="number"
        name="age"
        placeholder="age..."
        onChange={handleChange}
      />
      <MyInput
        type="password"
        name="password"
        placeholder="password..."
        onChange={handleChange}
      />
      <button className={styles.registerFormBtn}>Register</button>
    </form>
  );
};

export default RegisterForm;
