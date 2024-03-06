import styles from "./MyInput.module.css";

const MyInput = ({ type, name, placeholder, onChange }) => {
  return (
    <input
      className={styles.myInput}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default MyInput;
