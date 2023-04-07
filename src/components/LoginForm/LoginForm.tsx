import { useState } from "react";
import { UserCredentials } from "../../hooks/types";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const initialFormData: UserCredentials = {
  username: "",
  password: "",
};

const LoginForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialFormData);
  const { loginUser } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const isNotEmpty = formData.username !== "" && formData.password !== "";

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserCredentials = {
      username: formData.username,
      password: formData.password,
    };

    loginUser(formDataToSubmit);
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} className="login-form">
      <div className="login-form__container">
        <div className="login-form__form-group">
          <label htmlFor="username" className="login-form__label">
            username
          </label>
          <input
            className="login-form__field"
            type="text"
            id="username"
            onChange={handleFormChange}
            autoComplete="off"
            value={formData.username}
          />
        </div>
        <div className="login-form__form-group">
          <label htmlFor="password" className="login-form__label">
            password
          </label>
          <input
            className="login-form__field"
            type="password"
            id="password"
            onChange={handleFormChange}
            autoComplete="off"
            value={formData.password}
          />
        </div>
      </div>
      <Button text="LOGIN" action={() => {}} isDisabled={!isNotEmpty} />
    </LoginFormStyled>
  );
};

export default LoginForm;
