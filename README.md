# My Apple Store

个人 Apple 设备收藏展示网站，采用苹果官网极简 Bento Grid 布局设计。

## 技术栈

- **框架**: React 18 + TypeScript
- **样式**: Tailwind CSS v4
- **路由**: Wouter
- **动画**: Motion (Framer Motion)
- **构建**: Vite 6
- **包管理**: pnpm

## 功能特性

- 🍎 苹果官网风格的极简设计
- 📱 响应式 Bento Grid 布局
- 🎨 天蓝色 (#78c0ff) 高亮配色
- 🖼️ 真实设备照片展示
- 🔐 Apple ID 管理（隐私保护）
- ✨ 流畅的动画效果

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

## 部署

### Vercel（推荐）

1. Fork 或导入此仓库到 Vercel
2. 构建设置会自动从 `vercel.json` 读取
3. 一键部署完成

构建配置：
- Build Command: `pnpm run build`
- Output Directory: `dist`
- Install Command: `pnpm install`

## 项目结构

```
src/
├── app/
│   ├── assets/          # 本地图片资源
│   ├── components/      # React 组件
│   ├── data/           # 产品数据
│   └── pages/          # 页面组件
├── styles/             # 全局样式
└── main.tsx           # 应用入口
```

## 设备展示

- iPhone 15 (Pink)
- iPad Mini 6th Gen (Pink)
- iPad Pro 12.9" 5th Gen (Silver)
- Mac Studio (M1 Ultra)
- MacBook Air M1 (Gold)
- Apple Watch Series 9
- AirPods Pro / AirPods 4 / AirPods 3
- 配件：Thunderbolt 线缆

## 许可证

MIT License

---

🛠️ Built with [Figma Make](https://figma.com) & ❤️
