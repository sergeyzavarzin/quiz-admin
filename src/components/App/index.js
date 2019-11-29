import React from 'react';
import {withRouter, Route, Link} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';

import Matches from '../../pages/Matches';
import Rivals from '../../pages/Rivals';
import Merch from '../../pages/Merch';
import Orders from '../../pages/Orders';

import Logo from '../../img/logo.svg';

const {Header, Content, Footer} = Layout;
const {Item} = Menu;

const App = ({location: {pathname}}) => {
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
        <img className='logo' src={Logo} alt='Зенит' style={{width: 80}}/>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={[pathname.slice(1)]}
          defaultOpenKeys={[pathname.slice(1)]}
          style={{lineHeight: '64px', float: 'right'}}
        >
          <Item key='matches'>
            <Link to='/matches'>Матчи</Link>
          </Item>
          <Item key='rivals'>
            <Link to='/rivals'>Соперники</Link>
          </Item>
          <Item key='merch'>
            <Link to='/merch'>Товары</Link>
          </Item>
          <Item key='orders'>
            <Link to='/orders'>Заказы</Link>
          </Item>
        </Menu>
      </Header>
      <Content style={{padding: '0 50px', marginTop: 64}}>
        <div style={{padding: 24, marginTop: 30, background: '#fff', minHeight: 360}}>
          <Route path={['/', '/matches']} exact component={Matches}/>
          <Route path='/rivals' exact component={Rivals}/>
          <Route path='/merch' exact component={Merch}/>
          <Route path='/orders' exact component={Orders}/>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>tweek4000@yandex.ru © 2019</Footer>
    </Layout>
  );
};

export default withRouter(App);
