/* eslint-disable import/no-mutable-exports */
import type { RequestClientOptions } from '@vben/request';

export type RequestFn = <T>(
  url: string,
  options: RequestClientOptions,
) => Promise<T>;

// #region requestDefault start
let requestDefault: RequestFn;

function setRequestDefault(fn: RequestFn) {
  requestDefault = fn;
}
// #endregion requestDefault end

// 如果还要请求其他服务，可以在这里添加，如下面添加的是 bff 服务的请求
// #region requestBff start
// let requestBff: RequestFn;

// function setRequestBff(fn: RequestFn) {
//   requestBff = fn;
// }
// #endregion requestBff end

export {
  // requestBff,
  requestDefault,
  // setRequestBff,
  setRequestDefault,
};
