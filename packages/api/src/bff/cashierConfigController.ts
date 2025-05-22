/* eslint-disable */
// @ts-ignore
import { requestDefault as request } from '../requestFns';
import type { RequestClientOptions } from '@vben/request';

import * as API from './types';

/** 查询二维码配置 GET /gw/store/qrcode/qryQrCodeMarkSet */
export async function gwStoreQrcodeQryQrCodeMarkSetUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.gwStoreQrcodeQryQrCodeMarkSetUsingGetParams;
  options?: RequestClientOptions;
}) {
  return request<API.CommonResponseCreateQrCodeRequest_>(
    `/management/gw/store/qrcode/qryQrCodeMarkSet`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
