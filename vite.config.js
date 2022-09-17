import { defineConfig } from 'vite'; // 动态配置函数
import vue from '@vitejs/plugin-vue2';
import path from 'path';

export default () =>
  defineConfig({
    plugins: [vue()],
    server: {
      open: true, //自动打开浏览器
      port: 1567,
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
        {
          find: 'components',
          replacement: path.resolve(__dirname, 'src/components'),
        },
        {
          find: '@views',
          replacement: path.resolve(__dirname, 'src/views'),
        },
        {
          find: '@layouts',
          replacement: path.resolve(__dirname, 'src/layouts'),
        },
      ],
    },
  });
