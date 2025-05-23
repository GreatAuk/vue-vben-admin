<script setup lang="ts">
import { Page } from '@vben/common-ui';

import { ElAlert, ElCard } from 'element-plus';
</script>

<template>
  <Page
    description="接口调用示例： 简单调用、错误处理、上传文件、下载文件"
    title="API 调用示例"
    content-class="flex flex-col gap-4"
  >
    <ElAlert
      title="当前项目业务错误(resultCode: 'FAIL')会被 throw，在 catch 中进行统一处理"
      type="success"
    >
      <ol class="ml-4 mt-2 space-y-2">
        <li>1. 简化业务代码：业务层面只需要关注成功的逻辑</li>
        <li>2. 统一错误处理：所有错误都在拦截器中统一处理</li>
        <li>3. 提高可维护性：错误处理逻辑集中，易于修改和扩展</li>
        <li>4. 符合开发规范：遵循了单一职责和关注点分离原则</li>
      </ol>
    </ElAlert>
    <ElCard header="简单调用">
      <pre class="rounded-md bg-black p-4 text-sm text-white">
try {
  const res = await gwStoreQrcodeQryQrCodeMarkSetUsingGet({
    params: {
      qrCode: '1922842642267226112_',
    },
  });
  /* 这里只处理成功情况（且只有 res.resultCode === 'SUCCESS' 才会进入），代码更清晰 */
  console.log('[17]-basic.vue', res.item);
} catch (error) {
  /*
   * 这里会捕获所有错误：
   * 1. 网络错误（404、500等）
   * 2. 业务错误（resultCode: 'FAIL'）
   * 3. 代码执行错误（如 res 不存在）
   * 因为没有设置 options.errorMessageMode: 'none'，所以错误信息已在拦截器中统一处理和展示
   */
  console.error(error);
}
      </pre>
    </ElCard>

    <ElCard header="自己处理业务错误，不使用默认的错误提示">
      <pre class="rounded-md bg-black p-4 text-sm text-white">
import { gwStoreQrcodeQryQrCodeMarkSetUsingGet } from '@vben/api/bff/cashierConfigController.ts';
import { isServerError } from '#/utils'; // 判断是否是后端错误 (盛付通约定的统一错误返回格式)

try {
  const res = await gwStoreQrcodeQryQrCodeMarkSetUsingGet({
    params: {
      qrCode: '1922842642267226112',
    },
    options: {
      errorMessageMode: 'none', // 默认有错误，会直接使用 ElMessage 提示错误信息。这里设置为 'none'，需要自己处理错误
    },
  });
  console.log('[17]-basic.vue', res.item);
} catch (error) {
  if (isServerError(error) && error.errorCode === 'Expired') {
    // 因为上面设置了 errorMessageMode: 'none'，所以这里需要自己处理错误。
    console.log('操作已过期');
  } else {
    // 非后端业务报错，直接打印
    console.error(error);
  }
}
      </pre>
    </ElCard>

    <ElCard header="上传文件">
      <pre class="rounded-md bg-black p-4 text-sm text-white">
TODO
      </pre>
    </ElCard>

    <ElCard header="下载文件">
      <pre class="rounded-md bg-black p-4 text-sm text-white">
TODO
      </pre>
    </ElCard>
  </Page>
</template>

<style scoped></style>
