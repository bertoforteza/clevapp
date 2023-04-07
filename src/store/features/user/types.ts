export interface UserState {
  username: string;
  id: string;
  token: string;
  isLogged: boolean;
}

export type UserCredentials = Pick<UserState, "username" | "id" | "token">;
