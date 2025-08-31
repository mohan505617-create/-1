import React, { useState, useEffect } from 'react';
import { Layout, ConfigProvider, theme } from 'antd';
import Sidebar from './components/Sidebar';
import DocumentViewer from './components/DocumentViewer';
import { DocumentProvider } from './contexts/DocumentContext';
import './App.css';

const { Content } = Layout;

function App() {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#0ea5e9',
          borderRadius: 8,
        },
      }}
    >
      <DocumentProvider>
        <Layout className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <Sidebar 
            collapsed={collapsed}
            onCollapse={setCollapsed}
            onSelectDocument={setSelectedDocument}
            selectedDocument={selectedDocument}
          />
          <Layout className={`transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-80'}`}>
            <Content className="p-6">
              <div className="bg-white rounded-xl shadow-lg h-full">
                <DocumentViewer 
                  document={selectedDocument}
                  onDocumentSelect={setSelectedDocument}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      </DocumentProvider>
    </ConfigProvider>
  );
}

export default App;