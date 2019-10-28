import React from 'react';
import {Switch, Route, Link, HashRouter} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;
const { Item } = Menu;

const App = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['matches']}
          style={{ lineHeight: '64px' }}
        >
          <Item key="matches">
            <Link to='/matches'>Матчи</Link>
          </Item>
          <Item key="rivals">
            <Link to='/rivals'>
              Соперники
            </Link>
          </Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ padding: 24, marginTop: 30, background: '#fff', minHeight: 360 }}>
          <Route path='/matches' exact render={() => <div>Матчи</div>}/>
          <Route path='/rivals' exact render={() => <div>Соперники</div>}/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>tweek4000@yandex.ru ©2019</Footer>
    </Layout>
  );
};

export default App;
