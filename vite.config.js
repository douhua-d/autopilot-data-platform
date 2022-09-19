import { defineConfig, loadEnv } from 'vite'; // 动态配置函数
import vue from '@vitejs/plugin-vue2';
import path from 'path';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue()],
    base: process.env.VITE_APP_BASE,
    build: {
      outDir: process.env.VITE_APP_DIR,
    },
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
};
