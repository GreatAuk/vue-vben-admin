import type { OpenAPIObject } from 'openapi-ts-request/dist/type';

/**
 * 驼峰命名
 */
export function camelize(str: string) {
  return str.replaceAll(/^\w|[A-Z]|\b\w|\s+/g, (match, index) => {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

const httpRequestTypes = [
  'get',
  'post',
  'put',
  'delete',
  'patch',
  'head',
  'options',
  'trace',
] as const;

/**
 * 手动修改 api json 数据
 */
export function patchApiJSON(jsonObj: OpenAPIObject) {
  // tags 的 name 使用 description 的驼峰命名
  const tagMap: Record<string, string> = {};
  jsonObj.tags?.forEach((v: any) => {
    tagMap[v.name] = v.description;
    v.name = camelize(v.description);
  });

  // 把所有接口的 tag 更新成英文
  Object.keys(jsonObj.paths).forEach((path) => {
    httpRequestTypes.forEach((method) => {
      if (!jsonObj.paths[path][method]) return;

      const curTags = jsonObj.paths[path][method].tags;
      jsonObj.paths[path][method].tags = curTags.map(
        (tag: string) => tagMap[tag],
      );
    });
  });

  return jsonObj;
}
