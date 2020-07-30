import { Request, Response, NextFunction } from 'express';


// interface IApiResponse {
//      respType: Response;
//      errMessage: string;
//      exxCode: number;
// }



export const ApiResponseError = (resp: Response, errMessage: string, errCode: number): object =>  {

    let respObj = {};
  
    if (typeof errMessage == 'object' && typeof errMessage != 'undefined') {
        errMessage = errMessage;
    }

    return resp.json(respObj);

};

export const ApiResponseSuccess = (resp: Response, errMessage: string, errCode: number): object =>  {

    let respObj = {};
  
    if (typeof errMessage == 'object' && typeof errMessage != 'undefined') {
        errMessage = errMessage;
    }

    return resp.json(respObj);

};

// module.exports.ReE = function(res, err, code) {
//     // Error Web Response
//     if (typeof err == 'object' && typeof err.message != 'undefined') {
//       err = err.message;
//     }
  
//     if (typeof code !== 'undefined') res.statusCode = code;
//     let send_data = { success: false, error: err, meta: {} };
//     if (res.start) {
//       send_data.meta['time'] = (Date.now() - res.start).toString() + 'ms';
//     }
//     send_data.meta['cached'] = false;
//     send_data.meta['env'] = CONFIG.app;
//     send_data.meta['version'] = packageJson.version;
//     return res.json(send_data);
//   };