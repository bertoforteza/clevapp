export interface UserState {
  username: string;
  id: string;
  token: string;
  isLogged: boolean;
}

export type UserLoginData = Omit<UserState, "isLogged">;
