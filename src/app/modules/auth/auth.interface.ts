import { ENUM_USER_ROLE } from "../../../enums/users";


export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type IVerifiedLoginUser = {
  userEmail: string;
  role: ENUM_USER_ROLE;
};
