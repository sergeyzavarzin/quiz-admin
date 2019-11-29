import React from 'react';
import {Table, Button, Modal, Input, Form, Select} from 'antd';
import moment from 'moment';

import {withAppContext} from '../../contexts/AppContext';

import {TYPES} from '../../constants/merchTypes';

import './Ordrers.scss';

const {Option} = Select;

const DELIVERY = {
  MATCH: {
    label: 'Заберу на домашнем матче',
    type: 'MATCH',
  },
  POST: {
    label: 'Почтой',
    type: 'POST',
  }
};

const STATUSES = {
  CREATED: 'В обработке',
  AWAITING_EXTRADITION: 'Ожидает выдачи',
  SENDED: 'Отправлено',
  DELIVERED: 'Доставлено'
};

class Orders extends React.Component {

  state = {
    orders: [],
    activeModal: null,
    selectedOrder: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const {orders} = nextProps.context.state;
    if (orders) {
      const prepared = orders.map(({id, userId, orderInfo, status}) => {
        return {id, userId, orderInfo: JSON.parse(orderInfo), status}
      }).map(order => {
        return {
          id: order.id,
          userId: order.userId,
          status: order.status,
          ...order.orderInfo,
          ...JSON.parse(order.orderInfo.deliveryAddress),
        }
      }).sort((a, b) => moment.utc(b.createDateTime).diff(moment.utc(b.createDateTime)));
      return {orders: prepared};
    }
    return null;
  }

  renderColumns = () => {
    return [
      {
        title: 'Пользователь',
        dataIndex: 'userId',
        render: (dataIndex, {firstName, lastName}) => {
          return (
            <a
              href={`https://vk.com/id${dataIndex}`}
              target='_blank' rel='noopener noreferrer'
            >
              {firstName} {lastName}
            </a>
          )
        }
      },
      {
        title: 'Товар',
        dataIndex: 'merch',
        render: dataIndex => {
          return (
            <div className='order__merch'>
              <img
                className='order__image'
                src={dataIndex.image}
                alt={dataIndex.name}
              />
              <span>
                {dataIndex.name}
              </span>
            </div>
          )
        }
      },
      {
        title: 'Тип доставки',
        dataIndex: 'deliveryType',
        render: (dataIndex, {merch}) => {
          return (
            merch.type === TYPES.DIGITAL ? 'Выдан код' : DELIVERY[dataIndex].label
          )
        }
      },
      {
        title: 'Статус',
        dataIndex: 'status',
        render: dataIndex => STATUSES[dataIndex]
      },
      {
        title: 'Дата',
        dataIndex: 'createDateTime',
        render: dataIndex => moment(dataIndex).format('DD.MM.YYYY HH:mm')
      },
      {
        title: 'Действия',
        render: (data, record) => <Button
          onClick={() => this.setState({
            activeModal: true,
            selectedOrder: record.id,
          })}
        >
          Изменить статус
        </Button>
      },
    ];
  };

  additionalInfoRender = record => {
    const {merch, country, city, address, postIndex, email, phone} = record;
    return (
      <div className='order__info'>
        {
          merch.type === TYPES.PHYSICAL &&
          <div>
            <b>Адрес:</b> {country && country}, {city && city}, {address && address}, {postIndex && postIndex}
          </div>
        }
        {
          email && <div><b>Email:</b> {email}</div>
        }
        {
          phone && <div><b>Телефон:</b> {phone}</div>
        }
      </div>
    )
  };

  ChangeOrderStatusForm = Form.create({name: 'ChangeOrderStatusForm'})(({form}) => {
    const {changeOrderStatus} = this.props.context;
    const {orders, selectedOrder} = this.state;
    const {getFieldDecorator, validateFields} = form;
    const order = orders.find(item => item.id === selectedOrder);
    const handleCreateMatch = e => {
      e.preventDefault();
      validateFields((err, {status}) => {
        if (!err) changeOrderStatus(selectedOrder, status, () => this.setState({activeModal: false}));
      });
    };
    return (
      <Form onSubmit={handleCreateMatch} className='create-match'>
        <Form.Item>
          <Input disabled defaultValue={`${order.firstName} ${order.lastName}`}/>
        </Form.Item>
        <Form.Item>
          <Input disabled defaultValue={order.merch.name}/>
        </Form.Item>
        <Form.Item>
          <Input disabled defaultValue={moment(order.createDateTime).format('DD.MM.YYYY HH:mm')}/>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('status', {
            initialValue: order.status,
          })(
            <Select
              placeholder='Статус'
            >
              {
                Object.keys(STATUSES).map(item =>
                  <Option key={item}  value={item}>{STATUSES[item]}</Option>
                )
              }
            </Select>,
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            block
          >
            Создать матч
          </Button>
        </Form.Item>
      </Form>
    )
  });


  render() {
    const {ChangeOrderStatusForm} = this;
    const {orders, activeModal} = this.state;
    return (
      <div className='orders'>
        <h1>Заказы</h1>
        <Table
          dataSource={orders}
          loading={!this.props.context.state.isAppLoaded}
          columns={this.renderColumns()}
          expandedRowRender={this.additionalInfoRender}
          rowKey={(record) => record.id}
        />
        <Modal
          title='Изменить статус заказа'
          visible={activeModal}
          onCancel={() => this.setState({
            activeModal: false
          })}
          footer={false}
        >
          <ChangeOrderStatusForm/>
        </Modal>
      </div>
    )
  }
}

export default withAppContext(Orders);
