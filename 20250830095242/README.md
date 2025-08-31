# 个人知识管理工具

一个基于 React、TailwindCSS 和 Ant Design 构建的现代化个人知识管理工具，支持 Markdown 文档管理和双链接功能。

## ✨ 特性

- 🎨 **现代化 UI** - 使用 TailwindCSS 和 Ant Design 构建的美观界面
- 📁 **文件夹管理** - 支持按文件夹组织文档
- 📝 **Markdown 支持** - 完整的 Markdown 渲染和语法高亮
- 🔗 **双链接功能** - 支持 `[[文档标题]]` 格式的文档间链接
- 🔍 **全文搜索** - 快速搜索文档标题、内容和标签
- 🏷️ **标签系统** - 为文档添加标签便于分类
- 📱 **响应式设计** - 适配不同屏幕尺寸
- ⚡ **快速导航** - 可折叠侧边栏和直观的文档列表

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:3000` 启动。

### 构建生产版本

```bash
npm run build
```

## 📖 使用说明

### 文档管理

1. **浏览文档** - 在左侧边栏选择文件夹查看文档列表
2. **阅读文档** - 点击文档标题在右侧查看器中阅读内容
3. **搜索文档** - 使用顶部搜索框快速查找文档

### 双链接功能

在 Markdown 文档中使用 `[[文档标题]]` 格式创建文档间的链接：

```markdown
参考 [[React Hooks 使用指南]] 了解更多信息。
```

点击链接可以快速跳转到相关文档。

### 文档结构

每个文档包含以下信息：
- 标题
- 内容（Markdown 格式）
- 标签
- 创建时间和更新时间
- 所属文件夹

## 🛠️ 技术栈

- **React 18** - 前端框架
- **Vite** - 构建工具
- **TailwindCSS** - CSS 框架
- **Ant Design** - UI 组件库
- **React Markdown** - Markdown 渲染
- **Lucide React** - 图标库

## 📁 项目结构

```
src/
├── components/          # React 组件
│   ├── Sidebar.jsx     # 侧边栏组件
│   ├── DocumentViewer.jsx  # 文档查看器
│   └── MarkdownRenderer.jsx # Markdown 渲染器
├── contexts/           # React Context
│   └── DocumentContext.jsx # 文档数据管理
├── App.jsx            # 主应用组件
├── main.jsx           # 应用入口
└── index.css          # 全局样式
```

## 🎨 自定义样式

项目使用 TailwindCSS 进行样式管理，主要的自定义样式包括：

- 渐变背景和卡片效果
- 自定义的 Markdown 渲染样式
- 响应式布局
- 悬停和交互效果

## 📝 待办事项

- [ ] 添加文档编辑功能
- [ ] 支持文件上传和图片插入
- [ ] 实现文档导出功能
- [ ] 添加主题切换功能
- [ ] 支持文档版本历史
- [ ] 实现协作功能

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License