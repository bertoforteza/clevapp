import { renderHook } from "@testing-library/react";
import { UserCredentials } from "../types";
import useUser from "./useUser";
import ProviderWrapper from "../../utils/testUtils/ProviderWrapper";
import { store } from "../../store/store";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { openModalActionCreator } from "../../store/features/ui/uiSlice";

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given a useUser custom hook", () => {
  describe("When it's loginUser function is invoked with username 'admin' and password 'adminadmin'", () => {
    test("Then it should invoke dispatch with loginUser action", () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const loginData: UserCredentials = {
        username: "admin",
        password: "adminadmin",
      };
      const loginAction = loginUserActionCreator({
        id: "1234",
        username: loginData.username,
        token: "adminToken",
      });

      loginUser(loginData);

      expect(dispatchSpy).toHaveBeenCalledWith(loginAction);
    });
  });

  describe("When it's loginUser function is invoked with username 'admin' and wrong password 'admin1234'", () => {
    test("Then it should invoke dispatch with openModal action and error message 'Wrong credentials, please try again'", () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const loginData: UserCredentials = {
        username: "admin",
        password: "admin1234",
      };
      const openModalAction = openModalActionCreator({
        isError: true,
        message: "Wrong credentials, please try again",
      });

      loginUser(loginData);

      expect(dispatchSpy).toHaveBeenCalledWith(openModalAction);
    });
  });
});
