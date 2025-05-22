import { generateService } from 'openapi-ts-request';

import { schemaPathMap } from './schemaPath.config';
import { patchApiJSON } from './utils';

/**
 * http://domain/swagger-ui.html?docExpansion=list
 */
export function generateService_bff() {
  // 详细文档参考 https://github.com/openapi-ui/openapi-ts-request?tab=readme-ov-file#%E5%8F%82%E6%95%B0
  generateService({
    requestImportStatement: `import { requestDefault as request } from '../requestFns';
import type { RequestClientOptions } from '@vben/request';
`,
    requestOptionsType: 'RequestClientOptions',
    schemaPath: schemaPathMap.bff,
    serversPath: './src/bff',
    apiPrefix: "'/management'",
    priorityRule: 'include', // 模式规则，可选include/exclude/both
    includeTags: ['Cashier Config Controller'], // 根据指定的 tags 生成代码, priorityRule=include则必填
    // excludeTags: [], // 根据指定的 tags 不生成代码
    // includePaths: [], // 根据指定的 paths 生成代码
    // excludePaths: [], // 根据指定的 paths 不生成代码
    hook: {
      afterOpenApiDataInited: patchApiJSON,
    },
  });
}
