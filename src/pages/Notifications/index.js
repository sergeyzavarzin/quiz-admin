import React from 'react';
import {Input, Button, List, Icon, Spin} from 'antd';

import {withAppContext} from '../../contexts/AppContext';

import './Notifications.scss';
import moment from 'moment';

class Notifications extends React.Component {
  state = {
    message: '',
  };

  componentDidMount() {
    const {
      state: {
        notifications,
      },
      fetchNotifications,
    } = this.props.context;
    if (!notifications) {
      fetchNotifications();
    }
  }

  setMessage = e => {
    if (this.state.message.length < 250) {
      this.setState({message: e.currentTarget.value})
    }
  };

  render() {
    const {
      createNotification,
      state: { notifications }
    } = this.props.context;
    const {message} = this.state;
    return (
      <div className='notifications'>
        <h1>Создать уведомление</h1>
        <div style={{width: 350, marginBottom: 30}}>
          <Input.TextArea
            rows={4}
            value={message}
            onChange={this.setMessage}
          />
          <span style={{paddingBottom: 20}}>{message.length} / 250</span>
          <Button
            block
            type='primary'
            disabled={!message.length}
            onClick={() => createNotification(message)}
          >
            Отправить уведомление
          </Button>
        </div>
        <h1>Уведомления</h1>
        {
          notifications ?
          <List
            itemLayout="vertical"
            dataSource={notifications.sort((a, b) => moment.utc(b.createDateTime).diff(moment.utc(a.createDateTime)))}
            renderItem={item => {
              const {initiator, successful, failed, total} = JSON.parse(item.info);
              return (
                <List.Item
                  key={item.createDateTime}
                  actions={[
                    <span>Успешно: {successful}</span>,
                    <span>Ошибка: {failed}</span>,
                    <span>Итого: {total}</span>,
                  ]}
                >
                  <List.Item.Meta
                    title={`${initiator} (${moment(item.createDateTime).format('DD.MM.YYYY HH:mm')})`}
                    description={item.message}
                  />
                </List.Item>
              )
            }}
          /> : <Spin/>
        }
      </div>
    )
  }
}

export default withAppContext(Notifications)
