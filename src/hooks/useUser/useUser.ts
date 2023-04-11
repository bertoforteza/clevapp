import { useCallback } from "react";
import { openModalActionCreator } from "../../store/features/ui/uiSlice";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { UseUserStructure } from "../types";
import { UserCredentials } from "../../types";

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const loginUser = (loginData: UserCredentials) => {
    const { username, password } = loginData;
    const token = "adminToken";

    if (username === "admin" && password === "adminadmin") {
      dispatch(loginUserActionCreator({ id: "1234", username, token }));
      localStorage.setItem("token", token);
    } else {
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Wrong credentials, please try again",
        })
      );
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");

    dispatch(logoutUserActionCreator());
  };

  const getUserToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(
        loginUserActionCreator({
          id: "1234",
          token,
          username: "admin",
        })
      );
    }
  }, [dispatch]);

  return { loginUser, logoutUser, getUserToken };
};

export default useUser;
