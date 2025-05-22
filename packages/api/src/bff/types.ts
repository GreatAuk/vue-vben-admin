/* eslint-disable */
// @ts-ignore

export type CommonResponseCreateQrCodeRequest_ = {
  errorCode?: string;
  errorCodeDes?: string;
  item?: CreateQrCodeRequest;
  resultCode?: 'SUCCESS' | 'FAIL';
};

export type CreateQrCodeRequest = {
  /** 固定金额时，金额大小(单位分) */
  amount?: number;
  /** 是否为固定金额0=非固定，1=固定金额 */
  fixedAmount?: number;
  /** 商户名称 */
  mchName?: string;
  /** 二维码编号 */
  qrCode?: string;
  /** 二维码名称 */
  qrCodeName?: string;
  qrCodeSet?: QrCodeSet;
  /** 门店id */
  storeId?: string;
  /** 门店名称 */
  storeName?: string;
};

export type gwStoreQrcodeQryQrCodeMarkSetUsingGetParams = {
  /** qrCode */
  qrCode: string;
};

export type QrCodeMarkSet = {
  /** 备注格式1、手机号，2、邮箱，3、日期，4、数字，5、普通文本 */
  dataType?: string;
  /** 备注key */
  fieldKey?: string;
  /** 备注名称 */
  fieldName?: string;
  /** 是否必须 true=必填 false=非必填 */
  required?: boolean;
};

export type QrCodeSet = {
  /** 备注 */
  markSets?: QrCodeMarkSet[];
  /** 展示信息 */
  showSets?: QrCodeShowSet[];
};

export type QrCodeShowSet = {
  /** 展示标签key */
  label?: string;
  /** 展示标签value */
  value?: string;
};

export enum ResultCodeEnum {
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

export type IResultCodeEnum = keyof typeof ResultCodeEnum;
