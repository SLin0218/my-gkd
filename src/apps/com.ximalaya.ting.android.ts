import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    {
      key: 7,
      name: '全屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches:
            '[text="支持正版 广告收入将分成给创作者"] - [vid="main_close"]',
        },
        { key: 2, fastQuery: true, matches: '[text="7天内不再提醒"]' },
        {
          key: 3,
          fastQuery: true,
          matches:
            '[text="您有多大意愿向他人推荐使用喜马拉雅？"] + [vid="host_iv_close"]',
        },
        {
          key: 4,
          fastQuery: true,
          matches: '[text="添加历史到桌面"] + [vid="listen_close_iv"]',
        },
      ],
    },
  ],
});
