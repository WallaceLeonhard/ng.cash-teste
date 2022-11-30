import { IUser } from "./IUser";

export interface IContext extends IUser {
  authenticate: (username: string, password: string) => Promise<void>;
  logOut: () => void;
}
