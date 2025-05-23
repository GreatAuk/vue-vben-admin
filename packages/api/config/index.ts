import { cancel, intro, isCancel, multiselect } from '@clack/prompts';

import { generateService_bff } from './bff.service';

/** 服务函数 map */
const serverNameMap = {
  generateService_bff,
};
/** 服务描述 map */
const serverDescMap: Record<string, string> = {
  generateService_bff: '网关 bff',
};

void (async function () {
  type Answers = (keyof typeof serverNameMap)[];

  const answers = (await multiselect({
    message: '请选择要生成的 service',
    options: Object.keys(serverNameMap).map((name) => ({
      value: name,
      label: name,
      hint: serverDescMap[name],
    })),
    required: true,
  })) as unknown as Answers;

  if (isCancel(answers) || !answers) {
    cancel('👋 Has cancelled');
    // eslint-disable-next-line n/prefer-global/process, unicorn/no-process-exit
    process.exit(0);
  }

  answers.forEach((name) => {
    const fn = serverNameMap[name];
    if (fn) fn();
    else intro(`===========没有找到 ${name} 对应的函数===========`);
  });
})();
