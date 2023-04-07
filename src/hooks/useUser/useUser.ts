import { openModalActionCreator } from "../../store/features/ui/uiSlice";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { UserCredentials } from "../types";

const useUser = () => {
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

  return { loginUser };
};

export default useUser;
