import { Request, Response } from 'express';

export interface BaseResponse<T> {
  result: boolean;
  resultCd: number;
  message: string;
  data?: T;
  newAuth?: string;
}

export interface HyphensRequest<RequestModel extends {}>
  extends Request<any, any, RequestModel> { }

export interface HyphensResponse<ResponseModel extends {}>
  extends Response<BaseResponse<ResponseModel>> { }
