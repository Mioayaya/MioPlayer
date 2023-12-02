# MioPlay 

## Api使用 [NeteaseCloudMusicApi][NeteaseCloudMusicApi]


# 项目结构

## src
  - assets 图标等美术素材
  - common 常亮
  - components 通用组件
  - mobile 移动端页面
  - pages pc端页面
  - router 路由
  - service  接口封装
  - store 全局变量
  - type 类型接口
  - utils 工具函数

## 命名规则
- 文件名：小写 '-'
- 组件名: 大驼峰
- 函数名：小驼峰
- interface & type: Ixx
- props接口: 写在当前文件夹下
- css接口同理
- 多文件统一由当前的index文件导出
- pc组件 Mio+大驼峰
- mobile组件 MioMob+大驼峰

## 文件结构
- App.tsx -> 判断页面类型 -> content

# 问题描述
## Q1: `backdrop-filter: blur(10px);` 不起作用
A1: 直接在父div上不起效果，再新增一个子元素，大小和父元素一样，定位使用绝对定位，调整一下 z-index 即可  
```css
.background-cover {
  width: 100vw;
  height: 100vh;
  position: absolute;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  z-index: 1;
}
```


# tips
pc端灵感来自：**Bocchi the Rock! ぼっち・ざ・ろっく！(Album)** `[WallPaper]` author: Cube


[NeteaseCloudMusicApi]:https://github.com/Binaryify/NeteaseCloudMusicApi