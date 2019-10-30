import React from 'react';
import { Table, Button, Modal, Input } from 'antd';

import {withAppContext} from '../../contexts/AppContext';

import './Matches.scss';

const MODALS = {
  ADD_MATCH: 'ADD_MATCH',
  EDIT_MATCH: 'EDIT_MATCH',
};

class Matches extends React.Component {

  state = {
    activeModal: null,
    selectedMatch: null,
  };

  renderColumns = () => {
    return [
      {
        title: 'Соперник',
        dataIndex: 'rival',
        editable: true,
        render: (text, record) => {
          const { rivals } = this.props.context.state;
          const rival = rivals.find(rival => rival.id === record.rivalId);
          console.log(rivals, rival, record.id);
          return (
            <>
              {rival && rival.name}
            </>
          )
        }
      },
      {
        title: 'Начало матча',
        dataIndex: 'startDateTime',
        editable: true,
      },
      {
        title: 'Место',
        dataIndex: 'place',
        editable: true,
      },
      {
        title: 'Счет',
        dataIndex: 'score',
        editable: true,
      },
      {
        title: 'Стартовая пятерка',
        dataIndex: 'firstFive',
        editable: true,
      },
      {
        title: 'Два очка',
        dataIndex: 'twoScore',
        editable: true,
      },
      {
        title: 'Три очка',
        dataIndex: 'threeScore',
        editable: true,
      },
      {
        title: 'Вбрасывание',
        dataIndex: 'tossing',
        editable: true,
      },
      {
        title: 'Действия',
        dataIndex: 'operation',
        render: (text, record) => <>
          <Button
            type='link'
            size='small'
            onClick={() => this.setState({
              activeModal: MODALS.EDIT_MATCH,
              selectedMatch: record.id,
            })}
          >
            Редактировать
          </Button>
        </>
      },
    ];
  };

  onModalClose = () => {
    this.setState({
      activeModal: null,
      selectedMatch: null,
    })
  };

  render () {
    const { activeModal } = this.state;
    const {
      context: {
        createMatch,
        editMatch,
        state : {
          matches
        }
      }
    } = this.props;
    return (
      <div className='rivals'>
        <Table dataSource={matches} columns={this.renderColumns()} />
        <Button
          type='primary'
          onClick={() => this.setState({activeModal: MODALS.ADD_MATCH})}
        >
          Добавить
        </Button>
        <Modal
          title="Добавить матч"
          visible={activeModal === MODALS.ADD_MATCH}
          onOk={() => createMatch()}
          onCancel={this.onModalClose}
        >
          <Input placeholder="Название команды" onChange={(e) => this.setState({name: e.target.value})}/>
          <Input placeholder="Ссылка на логотип" onChange={(e) => this.setState({logo: e.target.value})}/>
        </Modal>
        <Modal
          title="Добавить матч"
          visible={activeModal === MODALS.EDIT_MATCH}
          onOk={() => editMatch()}
          onCancel={this.onModalClose}
        >
          <Input placeholder="Название команды" onChange={(e) => this.setState({name: e.target.value})}/>
          <Input placeholder="Ссылка на логотип" onChange={(e) => this.setState({logo: e.target.value})}/>
        </Modal>
      </div>
    )
  }
}

export default withAppContext(Matches);
