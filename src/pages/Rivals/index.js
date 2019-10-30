import React from 'react';
import { Table, Button, Modal, Input } from 'antd';

import {withAppContext} from '../../contexts/AppContext';

import './Rivals.scss';

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Логотип',
    dataIndex: 'logo',
    key: 'logo',
    render: logo => <img src={logo} alt={logo} width={70}/>
  },
  {
    title: 'Действия',
    render: () => <>
      <Button style={{marginRight: 15}}>Редактировать</Button>
      <Button type='danger'>Удалить</Button>
    </>
  }
];

class Rivals extends React.Component {

  state = {
    isVisibleModal: false,
    name: '',
    logo: '',
  };

  onModalClose = () => {
    this.setState({
      isModalVisible: false,
      name: '',
      logo: '',
    })
  };

  render () {
    const { isModalVisible, name, logo } = this.state;
    const {
      context: {
        createRival,
        state : {
          rivals
        }
      }
    } = this.props;
    return (
      <div className='rivals'>
        <Table dataSource={rivals} columns={columns} />
        <Button
          type='primary'
          onClick={() => this.setState({isModalVisible: true})}
        >
          Добавить
        </Button>
        <Modal
          title="Добавить соперника"
          visible={isModalVisible}
          onOk={() => createRival(1, name, logo, this.onModalClose)}
          onCancel={this.onModalClose}
        >
          <Input placeholder="Название команды" onChange={(e) => this.setState({name: e.target.value})}/>
          <Input placeholder="Ссылка на логотип" onChange={(e) => this.setState({logo: e.target.value})}/>
        </Modal>
      </div>
    )
  }
}

export default withAppContext(Rivals);
