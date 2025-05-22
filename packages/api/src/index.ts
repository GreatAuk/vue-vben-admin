import type { RequestFn } from './requestFns';

import { setRequestDefault } from './requestFns';

type SetupRequestFnOptions = {
  requestDefault: RequestFn;
  // requestBff: RequestFn;
};

export function setupRequestFn(options: SetupRequestFnOptions) {
  setRequestDefault(options.requestDefault);
  // setRequestBff(options.requestBff);
}
