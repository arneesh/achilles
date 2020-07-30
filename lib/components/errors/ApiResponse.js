"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseSuccess = exports.ApiResponseError = void 0;
// interface IApiResponse {
//      respType: Response;
//      errMessage: string;
//      exxCode: number;
// }
exports.ApiResponseError = function (resp, errMessage, errCode) {
    var respObj = {};
    if (typeof errMessage == 'object' && typeof errMessage != 'undefined') {
        errMessage = errMessage;
    }
    return resp.json(respObj);
};
exports.ApiResponseSuccess = function (resp, errMessage, errCode) {
    var respObj = {};
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
