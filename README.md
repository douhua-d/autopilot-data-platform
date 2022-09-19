# 自动驾驶-数据平台
## 基础搭建

```bash
# 安装依赖
npm i

# 运行
npm run dev

# 打包
npm run build

# 打包文件预览
npm run preview
```


>开发环境
>
> node v16.17.0
>
> npm v8.15.0

### 开发分支规范
`master`分支为线上稳定正是版本

`dev`为开发分支，所有参与开发的人员都基于`dev`分支拉取各自的分支进行开发，最终提MR到dev分支

个人开发分支在完成后应`及时删除`，避免远程无用分支过多

### 主要技术栈
`vue 2.7 + vue-router 3.x + pinia 2.x + typescript 4.x + three.js 0.144.0`


>`vue` https://blog.vuejs.org/posts/vue-2-7-naruto.html
>
> `pinia` https://pinia.vuejs.org/introduction.html
>
> `three.js `  https://threejs.org/
>
