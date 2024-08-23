import { Response } from './response.model';

export interface AuthResponse extends Response<Data> {
  data: Data;
}

export interface Data {
  uid: string;
  nickname: string;
  email: string;
  name: string;
  status: string;
  token: Token;
  createdAt: Date;
  updatedAt: Date;
}

export interface Token {
  token: string;
  expirationDate: null;
}
