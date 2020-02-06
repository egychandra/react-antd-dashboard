import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './style.css';
import { Route, Switch, Link } from 'react-router-dom';
import pageRoutes from '../../../config/router';

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {

  const [ collapsed, setCollapsed ] = useState(true)

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
      collapsible 
      collapsed={collapsed} 
      onCollapse={onCollapse}
      >
      <div className="logo" >ECL91</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
        {pageRoutes.map((data, i) => {
          return (
            <Menu.Item key={i}>
              <Link to={data.link}>
                <Icon type={data.icon} />
                <span className="nav-text">{data.name}</span>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content className={collapsed ? "navBar" : "navBarAktif"}>
        <div style={{ padding: '25px 64px 0', background: '#fff', textAlign: 'center' }}>
          <Switch>
            {pageRoutes.map((data, i) => {
              return (
                <Route 
                  path={data.path} 
                  component={data.component}
                  exact
                />
              );
            })}
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', background: 'rgb(255 255 255)' }}>React Ant Design Dashboard ©2020 Created by ECL91</Footer>
    </Layout>
  </Layout>
  );
}

export default Dashboard;