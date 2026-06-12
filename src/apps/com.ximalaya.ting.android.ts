import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    {
      key: 1,
      name: '观看视频广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches:
            '[text="支持正版 广告收入将分成给创作者"] - [vid="main_close"]',
        },
      ],
    },
  ],
});
