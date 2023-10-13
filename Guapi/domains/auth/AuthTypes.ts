import User from "../user/UserTypes";

export interface AuthToken {
    token: string;
    expiration: Date;
}

export type AuthUser = Pick<User, "id" | "name" | "email">

export interface AuthData {
    token: AuthToken;
    user: AuthUser;
}

export interface AuthParams {
    email: string,
    password: string
}