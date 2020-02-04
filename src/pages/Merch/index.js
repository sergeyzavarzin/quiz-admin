import React from 'react';
import {Table, Button, Modal, Input, Select, Popconfirm, Form, InputNumber} from 'antd';

import {withAppContext} from '../../contexts/AppContext';

import {TYPES} from '../../constants/merchTypes';

import createTranslitId from '../../utils/createTranslitId';

import './Merch.scss';

const DEFAULT_MERCH_COUNT = 1;

class Merch extends React.Component {

  state = {
    isModalVisible: false,
    editingMerchId: false,
  };

  columns = () => {
    const {deleteMerch} = this.props.context;
    return [
      {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Изображение',
        dataIndex: 'image',
        key: 'image',
        render: image => <img src={image} alt={image} width={70}/>
      },
      {
        title: 'Тип',
        dataIndex: 'type',
        key: 'type',
        render: type => type.toUpperCase() === TYPES.DIGITAL ? 'Цифровой' : 'Физический'
      },
      {
        title: 'Описание',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Цена',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Действия',
        render: (text, record) => <>
          <Button
            style={{marginRight: 15}}
            onClick={() => this.updateMerch(record.id)}
          >
            Редактировать
          </Button>
          <Popconfirm
            title='Вы уверены?'
            okText='Да'
            cancelText='Нет'
            onConfirm={() => deleteMerch(record.id)}
          >
            <Button type='danger'>Удалить</Button>
          </Popconfirm>
        </>
      }
    ]
  };

  onModalClose = () => this.setState({
    isModalVisible: false,
    editingMerchId: null,
  });

  updateMerch = editingMerchId => this.setState({editingMerchId, isModalVisible: true});

  MerchForm = Form.create({name: 'MerchForm'})(({form}) => {
    const {editingMerchId} = this.state;
    const {getFieldDecorator, validateFields, getFieldValue} = form;
    const {createMerch, updateMerch, state: {merch}} = this.props.context;
    const {name, image, price, description, type} = !!editingMerchId && merch.find(item => item.id === editingMerchId);
    const isDigital = getFieldValue('type') === TYPES.DIGITAL;
    const handleCreateMerch = e => {
      e.preventDefault();
      this.setState({isMatchPosting: true});
      validateFields((err, {name, description, price, image, type, values, count}) => {
        if (!err) {
          const id = editingMerchId || createTranslitId(name.trim());
          const cnt = values ? values.length : count || DEFAULT_MERCH_COUNT;
          if (editingMerchId) {
            updateMerch(id, name.trim(), image, price, description, type, cnt, () => this.setState({
              isModalVisible: false, editingMerchId: false
            }));
          } else {
            createMerch(id, name.trim(), image, price, description, type, values, cnt, () => this.setState({
              isModalVisible: false, editingMerchId: false
            }));
          }
        }
      });
    };
    return (
      <Form onSubmit={handleCreateMerch} className='create-match'>
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{required: true, message: 'Введите название товара'}],
            initialValue: name || '',
          })(
            <Input placeholder='Название'/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('image', {
            rules: [{required: true, message: 'Задайте изображение товара'}],
            initialValue: image || '',
          })(
            <Input placeholder='Изображение'/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('price', {
            rules: [{required: true, message: 'Введите цену товара'}],
            initialValue: price || '',
          })(
            <InputNumber placeholder='Цена' style={{width: '100%'}}/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('description', {
            rules: [{required: true, message: 'Введите описание товара'}],
            initialValue: description || '',
          })(
            <Input.TextArea placeholder='Описание'/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('type', {
            rules: [{required: true, message: 'Выберите тип товара'}],
            initialValue: type ? TYPES[type] : TYPES.PHYSICAL,
          })(
            <Select
              placeholder='Тип товара'
            >
              <Select.Option value={TYPES.DIGITAL}>Цифровой</Select.Option>
              <Select.Option value={TYPES.PHYSICAL}>Физический</Select.Option>
            </Select>
          )}
        </Form.Item>
        {
          isDigital ?
            <Form.Item>
              {getFieldDecorator('values', {
                rules: [{required: true, message: 'Задайте хотя бы одно значение'}],
              })(
                <Select mode='tags' placeholder='Значения'/>
              )}
            </Form.Item> :
            <Form.Item>
              {getFieldDecorator('count', {
                rules: [{required: true, message: 'Задайте количество товара'}],
              })(
                <InputNumber placeholder='Количество' style={{width: '100%'}}/>
              )}
            </Form.Item>
        }
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            block
          >
            Создать
          </Button>
        </Form.Item>
      </Form>
    )
  });

  render() {
    const {MerchForm} = this;
    const {isModalVisible, editingMerchId} = this.state;
    const {merch, isAppLoaded} = this.props.context.state;
    return (
      <div className='merch'>
        <h1>Товары</h1>
        <Table
          dataSource={merch}
          columns={this.columns()}
          rowKey={record => record.id}
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
          title={editingMerchId ? 'Редактировать' : 'Добавить товар'}
          visible={isModalVisible}
          onCancel={this.onModalClose}
          footer={false}
        >
          <MerchForm/>
        </Modal>
      </div>
    )
  }
}

export default withAppContext(Merch);
