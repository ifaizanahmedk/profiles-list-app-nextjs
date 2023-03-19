/* eslint-disable react/prop-types */
import React from 'react';
import { Layout, Space } from 'antd';

import styles from '@/styles/Layout.module.css';

const { Header, Footer, Content } = Layout;

function StyledLayout({ children }) {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%'
      }}
      size={[0, 48]}>
      <Layout>
        <Header className={styles.headerStyle}>Profiles App Built in NextJS</Header>
        <Content className={styles.contentStyle}>{children}</Content>
        <Footer className={styles.footerStyle}>Developed by @FaizanAhmed</Footer>
      </Layout>
    </Space>
  );
}

export default StyledLayout;
