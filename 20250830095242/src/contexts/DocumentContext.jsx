import React, { createContext, useContext, useState, useEffect } from 'react';

const DocumentContext = createContext();

export const useDocuments = () => {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error('useDocuments must be used within a DocumentProvider');
  }
  return context;
};

export const DocumentProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const [folders, setFolders] = useState([]);

  // 模拟数据
  useEffect(() => {
    const mockFolders = [
      { id: 'f1', name: '技术笔记', icon: '💻' },
      { id: 'f2', name: '读书笔记', icon: '📚' },
      { id: 'f3', name: '项目文档', icon: '📋' },
      { id: 'f4', name: '学习资料', icon: '🎓' },
    ];

    const mockDocuments = [
      {
        id: 'd1',
        title: 'React Hooks 使用指南',
        folderId: 'f1',
        content: `# React Hooks 使用指南

## 什么是 Hooks？

React Hooks 是 React 16.8 引入的新特性，它让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

## 常用的 Hooks

### useState
\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

### useEffect
\`\`\`javascript
useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);
\`\`\`

## 自定义 Hooks

你可以创建自己的 Hooks 来复用状态逻辑。参考 [[JavaScript 最佳实践]] 了解更多。

> Hooks 让组件之间复用状态逻辑变得简单。

## 相关链接
- [[组件设计模式]]
- [[性能优化技巧]]`,
        tags: ['React', 'JavaScript', 'Frontend'],
        createdAt: '2024-01-15',
        updatedAt: '2024-01-20'
      },
      {
        id: 'd2',
        title: 'JavaScript 最佳实践',
        folderId: 'f1',
        content: `# JavaScript 最佳实践

## 代码规范

### 变量命名
- 使用有意义的变量名
- 使用 camelCase 命名法
- 避免使用缩写

### 函数设计
\`\`\`javascript
// 好的例子
function calculateTotalPrice(items) {
  return items.reduce((total, item) => total + item.price, 0);
}
\`\`\`

## 性能优化

1. **避免不必要的重新渲染**
2. **使用 memo 和 useMemo**
3. **代码分割和懒加载**

详细内容请参考 [[React Hooks 使用指南]]。

## ES6+ 特性

- 解构赋值
- 箭头函数
- Promise 和 async/await
- 模块化

> 始终保持代码的可读性和可维护性。`,
        tags: ['JavaScript', 'Best Practices', 'Code Quality'],
        createdAt: '2024-01-10',
        updatedAt: '2024-01-18'
      },
      {
        id: 'd3',
        title: '《深入理解计算机系统》读书笔记',
        folderId: 'f2',
        content: `# 《深入理解计算机系统》读书笔记

## 第一章：计算机系统漫游

### 信息就是位+上下文

计算机系统中的所有信息都是由一串位表示的，区分不同数据对象的唯一方法是我们读到这些数据对象时的上下文。

### 程序被其他程序翻译成不同的格式

\`\`\`
hello.c → [预处理器] → hello.i → [编译器] → hello.s → [汇编器] → hello.o → [链接器] → hello
\`\`\`

## 第二章：信息的表示和处理

### 整数表示
- 无符号编码
- 二进制补码编码
- 整数运算

### 浮点数
- IEEE 浮点表示
- 舍入
- 浮点运算

相关概念可以参考 [[数据结构与算法]]。

> 理解计算机如何表示和操作信息是系统编程的基础。`,
        tags: ['Computer Science', '读书笔记', 'System'],
        createdAt: '2024-01-05',
        updatedAt: '2024-01-25'
      },
      {
        id: 'd4',
        title: '组件设计模式',
        folderId: 'f3',
        content: `# 组件设计模式

## 容器组件 vs 展示组件

### 容器组件
- 关注数据如何工作
- 提供数据和行为给展示组件
- 通常是有状态的

### 展示组件
- 关注事物如何显示
- 接收 props 并渲染 UI
- 通常是无状态的

## 高阶组件 (HOC)

\`\`\`javascript
function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}
\`\`\`

## Render Props

\`\`\`javascript
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
\`\`\`

更多内容请查看 [[React Hooks 使用指南]] 和 [[性能优化技巧]]。

> 好的组件设计能够提高代码的复用性和可维护性。`,
        tags: ['React', 'Design Patterns', 'Architecture'],
        createdAt: '2024-01-12',
        updatedAt: '2024-01-22'
      },
      {
        id: 'd5',
        title: '性能优化技巧',
        folderId: 'f4',
        content: `# 性能优化技巧

## 前端性能优化

### 1. 代码层面优化
- 使用 React.memo 避免不必要的重渲染
- 使用 useMemo 和 useCallback 缓存计算结果
- 实现虚拟滚动处理大列表

### 2. 网络层面优化
- 代码分割和懒加载
- 图片优化和懒加载
- 使用 CDN 加速资源加载

### 3. 构建优化
\`\`\`javascript
// webpack 配置示例
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
\`\`\`

## 性能监控

使用 Performance API 监控关键指标：
- FCP (First Contentful Paint)
- LCP (Largest Contentful Paint)
- FID (First Input Delay)

参考 [[JavaScript 最佳实践]] 了解更多优化技巧。

> 性能优化是一个持续的过程，需要不断监控和改进。`,
        tags: ['Performance', 'Optimization', 'Web'],
        createdAt: '2024-01-08',
        updatedAt: '2024-01-28'
      },
      {
        id: 'd6',
        title: '数据结构与算法',
        folderId: 'f4',
        content: `# 数据结构与算法

## 基本数据结构

### 数组 (Array)
- 连续的内存空间
- 随机访问时间复杂度 O(1)
- 插入删除时间复杂度 O(n)

### 链表 (Linked List)
\`\`\`javascript
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
\`\`\`

### 栈 (Stack)
- LIFO (Last In First Out)
- 主要操作：push, pop, peek

### 队列 (Queue)
- FIFO (First In First Out)
- 主要操作：enqueue, dequeue

## 常用算法

### 排序算法
1. **冒泡排序** - O(n²)
2. **快速排序** - O(n log n)
3. **归并排序** - O(n log n)

### 搜索算法
1. **线性搜索** - O(n)
2. **二分搜索** - O(log n)

## 算法复杂度分析

时间复杂度和空间复杂度的分析对于选择合适的算法至关重要。

> 掌握基本的数据结构和算法是程序员的基本功。`,
        tags: ['Algorithm', 'Data Structure', 'Computer Science'],
        createdAt: '2024-01-03',
        updatedAt: '2024-01-30'
      }
    ];

    setFolders(mockFolders);
    setDocuments(mockDocuments);
  }, []);

  const getDocumentsByFolder = (folderId) => {
    return documents.filter(doc => doc.folderId === folderId);
  };

  const getDocumentById = (id) => {
    return documents.find(doc => doc.id === id);
  };

  const searchDocuments = (query) => {
    if (!query) return documents;
    return documents.filter(doc => 
      doc.title.toLowerCase().includes(query.toLowerCase()) ||
      doc.content.toLowerCase().includes(query.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const value = {
    documents,
    folders,
    getDocumentsByFolder,
    getDocumentById,
    searchDocuments,
  };

  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
};