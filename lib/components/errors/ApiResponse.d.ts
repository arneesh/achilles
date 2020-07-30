import { Response } from 'express';
export declare const ApiResponseError: (resp: Response, errMessage: string, errCode: number) => object;
export declare const ApiResponseSuccess: (resp: Response, errMessage: string, errCode: number) => object;
