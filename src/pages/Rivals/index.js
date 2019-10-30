import React from 'react';
import {Table, Button, Modal, Input} from 'antd';

import {withAppContext} from '../../contexts/AppContext';

import './Rivals.scss';
import createTranslitId from '../../utils/createTranslitId';

class Rivals extends React.Component {

  state = {
    isVisibleModal: false,
    name: '',
    logo: '',
  };

  columns = () => {
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
        render: () => <>
          <Button style={{marginRight: 15}}>Редактировать</Button>
        </>
      }
    ]
  }

  onModalClose = () => {
    this.setState({
      isModalVisible: false,
      name: '',
      logo: '',
    })
  };

  render() {
    const {isModalVisible, name, logo} = this.state;
    const {createRival} = this.props.context;
    const {rivals} = this.props.context.state;
    return (
      <div className='rivals'>
        <Table dataSource={rivals} columns={this.columns()}/>
        <Button
          type='primary'
          onClick={() => this.setState({isModalVisible: true})}
          style={{marginTop: 15}}
        >
          Добавить
        </Button>
        <Modal
          title="Добавить соперника"
          visible={isModalVisible}
          onOk={() => createRival(createTranslitId(name), name, logo, this.onModalClose)}
          onCancel={this.onModalClose}
        >
          <Input
            placeholder="Название команды"
            onChange={(e) => this.setState({name: e.target.value})}
            style={{marginBottom: 15}}
          />
          <Input
            placeholder="Ссылка на логотип"
            onChange={(e) => this.setState({logo: e.target.value})}
          />
        </Modal>
      </div>
    )
  }
}

export default withAppContext(Rivals);
