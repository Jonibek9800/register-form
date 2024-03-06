import RegisterForm from "../RegisterForm/RegisterForm";

const Main = () => {
  const formSubmit = (event, formData) => {
    event.preventDefault();
    console.log(formData);
  };

  return <RegisterForm onSubmit={formSubmit} />;
};

export default Main;
