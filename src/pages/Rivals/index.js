import React from 'react';
import {Table, Button, Modal, Input, Popconfirm} from 'antd';

import {withAppContext} from '../../contexts/AppContext';

import createTranslitId from '../../utils/createTranslitId';

import './Rivals.scss';

class Rivals extends React.Component {

  state = {
    isModalVisible: false,
    editingRivalId: false,
    name: '',
    logo: '',
  };

  columns = () => {
    const {rivals, matches} = this.props.context.state;
    const {deleteRival} = this.props.context;
    return [
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
        render: (text, record) => <>
          <Button
            style={{marginRight: 15}}
            onClick={() => this.setState({
              editingRivalId: record.id,
              isModalVisible: true,
              name: rivals.find(rival => rival.id === record.id).name,
              logo: rivals.find(rival => rival.id === record.id).logo,
            })}
          >
            Редактировать
          </Button>
          {
            !matches.some(match => match.rivalId === record.id) &&
            <Popconfirm
              title='Вы уверены?'
              okText='Да'
              cancelText='Нет'
              onConfirm={() => deleteRival(record.id)}
            >
              <Button type='danger'>Удалить</Button>
            </Popconfirm>
          }
        </>
      }
    ]
  };

  onModalClose = () => {
    this.setState({
      isModalVisible: false,
      editingRivalId: null,
      name: '',
      logo: '',
    })
  };

  handleModalOk = () => {
    const {state, props, onModalClose} = this;
    const {name, logo, editingRivalId} = state;
    const {createRival, updateRival} = props.context;
    const action = editingRivalId ? updateRival : createRival;
    action(editingRivalId || createTranslitId(name), name, logo, onModalClose)
  };

  render() {
    const {isModalVisible, editingRivalId, name, logo} = this.state;
    const {rivals, isAppLoaded} = this.props.context.state;
    return (
      <div className='rivals'>
        <h1>Соперники</h1>
        <Table
          dataSource={rivals}
          columns={this.columns()}
          rowKey={(record) => record.id}
          loading={!isAppLoaded}
        />
        <Button
          type='primary'
          onClick={() => this.setState({isModalVisible: true})}
          style={{marginTop: 15}}
        >
          Добавить
        </Button>
        <Modal
          title={editingRivalId ? 'Добавить соперника' : 'Редактировать'}
          visible={isModalVisible}
          onOk={this.handleModalOk}
          onCancel={this.onModalClose}
        >
          <Input
            placeholder="Название команды"
            defaultValue={name}
            onChange={(e) => this.setState({name: e.target.value})}
            style={{marginBottom: 15}}
          />
          <Input
            placeholder="Ссылка на логотип"
            defaultValue={logo}
            onChange={(e) => this.setState({logo: e.target.value})}
          />
        </Modal>
      </div>
    )
  }
}

export default withAppContext(Rivals);
