export interface Response<T> {
  code: number;
  path: string;
  success: boolean;
  data: T;
  isArray: boolean;
  ip: string;
  status: string;
}
