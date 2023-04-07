export interface UserState {
  username: string;
  id: string;
  token: string;
  isLogged: boolean;
}

export type UserLoginData = Pick<UserState, "username" | "id" | "token">;
