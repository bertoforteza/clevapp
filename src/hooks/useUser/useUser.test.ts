import { renderHook } from "@testing-library/react";
import { UserCredentials } from "../../types";
import useUser from "./useUser";
import ProviderWrapper from "../../utils/testUtils/ProviderWrapper";
import { store } from "../../store/store";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/user/userSlice";
import { openModalActionCreator } from "../../store/features/ui/uiSlice";
import localStorageMock from "../../mocks/localStorage/localStorageMock";
import mockUserData from "../../mocks/user/mockUserData";

const dispatchSpy = jest.spyOn(store, "dispatch");

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

beforeEach(jest.clearAllMocks);

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

  describe("When it's logoutUser function is invoked", () => {
    test("Then it should invoke dispatch with logoutUser action", () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      logoutUser();

      expect(dispatchSpy).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });

  describe("When it's getUserToken function is invoked and there is no token in the local storage", () => {
    test("Then dispatch should not be invoked", () => {
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      getUserToken();

      expect(dispatchSpy).not.toHaveBeenCalled();
    });
  });

  describe("When it's getUserToken function is invoked and there ir a token 'adminToken' in the local storage", () => {
    test("Then it should invoke dispatch with loginUser action", () => {
      localStorageMock.setItem("token", "adminToken");
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const loginUserAction = loginUserActionCreator(mockUserData);

      getUserToken();

      expect(dispatchSpy).toHaveBeenCalledWith(loginUserAction);
    });
  });
});
