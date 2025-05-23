type ServerError = {
  /** 错误码 */
  errorCode: string;
  /** 错误描述 */
  errorCodeDes: string;
  /** 结果码 */
  resultCode: 'FAIL';
};

/**
 * 判断是否是后端错误 (盛付通约定的统一错误返回格式)
 * @param error 错误对象
 * @returns 是否是后端错误
 */
export function isServerError(error: any): error is ServerError {
  return (
    Reflect.has(error, 'resultCode') &&
    Reflect.has(error, 'errorCode') &&
    Reflect.has(error, 'errorCodeDes')
  );
}
