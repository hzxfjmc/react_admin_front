import React, { Component } from 'react';
import Maprouter from "../../router/router"
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
// import './main.css';
import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
  const {
    Header, Content,Sider,
  } = Layout;
  const SubMenu = Menu.SubMenu;
  class LayoutMap extends Component{
      state = {
        collapsed: false,
        routerList:[{name:'系统设置',router:'/HighComponent'},{name:'服务列表',router:'/about'},{name:'用户列表',router:'/Parent'}]
      };
    
      handleClick = (e)=>{
        // console.log(e.key);
      }
      onCollapse = (collapsed) => {
        this.setState({ collapsed });
      }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['/HighComponent']} mode="inline" onClick={this.handleClick}>
              {
                this.state.routerList.map((item,index)=>{
                  return <Menu.Item key={item.router}>
                     <Icon type="desktop" />
                     <span>{item.name}</span>
                  </Menu.Item>
                })
              }
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} >
                <span className="name_ata">azu</span>
              </Header>
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Maprouter />
                </div>
              </Content>
            </Layout>
          </Layout>
        );
      }
}
export default LayoutMap;