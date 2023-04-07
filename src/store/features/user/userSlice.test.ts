import mockUserData from "../../../mocks/user/mockUserData";
import { UserLoginData, UserState } from "./types";
import {
  initialUserState,
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Gicen a userReducer", () => {
  describe("When it receives an empty initial state and a loginUser action with a user info as payload", () => {
    test("Then it should return a new state with the received user info and isLogged true", () => {
      const userData: UserLoginData = mockUserData;
      const expectedUserState: UserState = {
        isLogged: true,
        ...userData,
      };
      const loginAction = loginUserActionCreator(userData);

      const newUserState: UserState = userReducer(
        initialUserState,
        loginAction
      );

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });

  describe("When it receives an initial state with a logged user and a logoutUser action", () => {
    test("Then it should return a new state equal to the initialUserState", () => {
      const currentUserState: UserState = {
        isLogged: true,
        ...mockUserData,
      };
      const expectedUserState: UserState = initialUserState;

      const newUserState: UserState = userReducer(
        currentUserState,
        logoutUserActionCreator()
      );

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
