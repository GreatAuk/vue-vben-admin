/* eslint-disable */
// @ts-ignore
import * as API from './types';

export function displayResultCodeEnum(field: API.ResultCodeEnum) {
  return { SUCCESS: 'SUCCESS', FAIL: 'FAIL' }[field];
}
