import React, { useState } from 'react';
import { Layout, Menu, Input, Typography, Badge, Tooltip } from 'antd';
import { 
  FolderOutlined, 
  FileTextOutlined, 
  SearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BookOutlined
} from '@ant-design/icons';
import { useDocuments } from '../contexts/DocumentContext';

const { Sider } = Layout;
const { Search } = Input;
const { Text } = Typography;

const Sidebar = ({ collapsed, onCollapse, onSelectDocument, selectedDocument }) => {
  const { folders, documents, getDocumentsByFolder, searchDocuments } = useDocuments();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFolders, setExpandedFolders] = useState(['f1']);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredDocuments = searchQuery ? searchDocuments(searchQuery) : documents;

  const menuItems = folders.map(folder => {
    const folderDocs = searchQuery 
      ? filteredDocuments.filter(doc => doc.folderId === folder.id)
      : getDocumentsByFolder(folder.id);
    
    return {
      key: folder.id,
      icon: <FolderOutlined className="text-amber-500" />,
      label: (
        <div className="flex items-center justify-between">
          <span className="font-medium">{folder.name}</span>
          {!collapsed && (
            <Badge 
              count={folderDocs.length} 
              size="small" 
              style={{ backgroundColor: '#0ea5e9' }}
            />
          )}
        </div>
      ),
      children: folderDocs.map(doc => ({
        key: doc.id,
        icon: <FileTextOutlined className="text-blue-500" />,
        label: (
          <Tooltip title={doc.title} placement="right">
            <div className="truncate">
              <Text className="text-sm">{doc.title}</Text>
              {!collapsed && (
                <div className="text-xs text-gray-400 mt-1">
                  {doc.updatedAt}
                </div>
              )}
            </div>
          </Tooltip>
        ),
      })),
    };
  });

  const handleMenuClick = ({ key }) => {
    const document = documents.find(doc => doc.id === key);
    if (document) {
      onSelectDocument(document);
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={320}
      className="bg-white shadow-xl border-r border-gray-100"
      trigger={null}
    >
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOutlined className="text-white text-lg" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold text-gray-800">知识库</h1>
                <p className="text-xs text-gray-500">个人知识管理</p>
              </div>
            )}
          </div>
          <button
            onClick={() => onCollapse(!collapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
        </div>
        
        {!collapsed && (
          <Search
            placeholder="搜索文档..."
            allowClear
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            className="mb-2"
            prefix={<SearchOutlined className="text-gray-400" />}
          />
        )}
      </div>

      <div className="flex-1 overflow-auto">
        <Menu
          mode="inline"
          selectedKeys={selectedDocument ? [selectedDocument.id] : []}
          defaultOpenKeys={expandedFolders}
          items={menuItems}
          onClick={handleMenuClick}
          className="border-none"
          style={{ backgroundColor: 'transparent' }}
        />
      </div>

      {!collapsed && (
        <div className="p-4 border-t border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{documents.length}</div>
            <div className="text-xs text-gray-500">总文档数</div>
          </div>
        </div>
      )}
    </Sider>
  );
};

export default Sidebar;