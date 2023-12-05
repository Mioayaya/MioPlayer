# todolist  ⬜ ✅
- TopBar    ⬜
- Content   ⬜
- PlayerBar ⬜
 
## topBar
- ui ⬜


# 开发日志

## 2023-12-04 之前
搭建路由，整体的ui框架

## 2023-12-04
添加scrollReveal，放弃了滚动之后重新添加动画，将动画移到特定组件，减少不必要的消耗

## 2023-12-05
编写welcome组件，增加userSlice全局变量，新增随机诗词api

## 2023-12-06
使用Promise.all([]) 对接口进行统一发送，将背景图的background-image替换为img图片属性，原因是 想要先出现图片后，在渲染其他组件，可以解决白屏，闪屏问题。由于onLoad函数只在img属性上，因此替换原先的方案。