import React from 'react';
import {Table, Button, Modal, Input, Form, Select, DatePicker, Tag, Icon} from 'antd';
import moment from 'moment';

import createTranslitId from '../../utils/createTranslitId';

import {withAppContext} from '../../contexts/AppContext';

import players from '../../constants/players';

import './Matches.scss';

const {Option} = Select;

const DATE_FORMAT = 'DD.MM.YYYY HH:MM';

const MODALS = {
  ADD_MATCH: 'ADD_MATCH',
  EDIT_MATCH: 'EDIT_MATCH',
};

class Matches extends React.Component {

  state = {
    activeModal: null,
    selectedMatch: null,
    isMatchPosting: false,
  };

  renderColumns = () => {
    return [
      {
        title: 'Соперник',
        dataIndex: 'rival',
        render: (text, record) => {
          const {rivals} = this.props.context.state;
          const rival = rivals.find(rival => rival.id === record.rivalId);
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
        render: (text, record) => <>
          <span>{moment(record.startDateTime).format(DATE_FORMAT)}</span>
        </>
      },
      {
        title: 'Место',
        dataIndex: 'place',
      },
      {
        title: 'Счет',
        dataIndex: 'score',
        render: (text, {score}) => (score && score.length) ?
          <div
            style={{
              textAlign: 'center',
              color: '#fff',
              background: score[0] > score[1] ? 'green' : 'red',
              borderRadius: '7px',
            }}
          >
            <span>{score[0]}</span> : <span>{score[1]}</span>
          </div> : <></>
      },
      {
        title: 'Стартовая пятерка',
        dataIndex: 'firstFive',
        width: '10%',
        render: (text, {firstFive}) => firstFive && firstFive.length ? <>
          {
            firstFive.map(playerId =>
              <Tag>
                {players.find(item => item.id === playerId).name}
              </Tag>
            )
          }
        </> : <></>
      },
      {
        title: 'Два очка',
        dataIndex: 'twoScore',
        render: (text, {twoScore}) => twoScore && <Tag>
          {
            players.find(item => item.id === twoScore).name
          }
        </Tag>
      },
      {
        title: 'Три очка',
        dataIndex: 'threeScore',
        render: (text, {threeScore}) => threeScore && <Tag>
          {
            players.find(item => item.id === threeScore).name
          }
        </Tag>
      },
      {
        title: 'Вбрасывание',
        dataIndex: 'tossing',
        render: (text, {score, tossing}) => score && score.length ?
          <Icon
            theme="twoTone"
            type={!!tossing ? "check-circle" : "close-circle"}
            twoToneColor={!!tossing ? "#52c41a" : "red"}
            style={{fontSize: '28px'}}
          /> : <></>
      },
      {
        title: 'Действия',
        dataIndex: 'operation',
        render: (text, record) => record.score && record.score.length ? <></> : <>
          <Button
            type='primary'
            onClick={() => this.setState({
              activeModal: MODALS.EDIT_MATCH,
              selectedMatch: record.id,
            })}
          >
            Объявить результат
          </Button>
        </>
      },
    ];
  };

  onModalClose = () => {
    this.setState({
      activeModal: null,
    })
  };

  CreateMatchForm = Form.create({name: 'CreateMatchForm'})(({form}) => {
    const {getFieldDecorator, validateFields} = form;
    const {createMatch, state: {rivals}} = this.props.context;
    const handleCreateMatch = (e) => {
      e.preventDefault();
      this.setState({isMatchPosting: true});
      validateFields((err, {rivalId, place, startDateTime}) => {
        if (!err) {
          const FORMAT = 'DD-MM-YY-HH-MM-SS';
          const id = createTranslitId(`${rivals.find(rival => rival.id === rivalId).name}${moment(startDateTime).format(FORMAT)}`);
          createMatch(id, rivalId, place, startDateTime, () => this.setState({
            isMatchPosting: false, activeModal: null
          }))
        }
      });
    };
    return (
      <Form onSubmit={handleCreateMatch} className="create-match">
        <Form.Item>
          {getFieldDecorator('rivalId', {
            rules: [{required: true, message: 'Выберите соперника'}],
          })(
            <Select
              placeholder="Выберите соперинка"
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {rivals.map(({id, name}) => <Option key={id} value={id}>{name}</Option>)}
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('startDateTime', {
            rules: [{required: true, message: 'Выберите дату проведения матча!'}],
          })(
            <DatePicker
              style={{width: '100%'}}
              format={DATE_FORMAT}
              placeholder='Выберите дату и время'
              showTime
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('place', {
            rules: [{required: true, message: 'Укажите место проведения'}],
          })(
            <Input
              type="text"
              placeholder="Место проведения матча"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Создать матч
          </Button>
        </Form.Item>
      </Form>
    )
  });

  MatchResultsForm = Form.create({name: 'MatchResultsForm'})(({form}) => {
    const {getFieldDecorator, validateFields, setFields} = form;
    const {setMatchResults, state: {rivals, matches}} = this.props.context;
    const {selectedMatch: selectedMatchId} = this.state;
    const selectedMatch = matches.find(match => match.id === selectedMatchId);
    const rival = rivals.find(rival => rival.id === selectedMatch.rivalId);
    const handleUpdateMatch = (e) => {
      e.preventDefault();
      this.setState({isMatchPosting: true});
      validateFields((err, {firstFive, clubScore, rivalScore, twoScore, threeScore, tossing}) => {
        const intFirstFive = firstFive.map(item => parseInt(item));
        const score = [parseInt(clubScore), parseInt(rivalScore)];
        if (firstFive.length !== 5) {
          setFields({
            'firstFive': {
              value: firstFive,
              errors: [new Error('Нельзя выбрать больше или меньше чем 5 игроков')],
            },
          })
          return;
        }
        if (!err) {
          setMatchResults(selectedMatchId, intFirstFive, score, parseInt(twoScore), parseInt(threeScore), !!tossing, () => this.setState({
            isMatchPosting: false, activeModal: null
          }))
        }
      });
    };
    return (
      <Form onSubmit={handleUpdateMatch} className="create-match">
        <Form.Item>
          <Input
            disabled
            value={rival.name}
          />
        </Form.Item>
        <Form.Item>
          <Input
            disabled
            value={selectedMatch.place}
          />
        </Form.Item>
        <Form.Item>
          <Input
            disabled
            value={moment(selectedMatch.startDateTime).format(DATE_FORMAT)}
          />
        </Form.Item>
        <Form.Item label='Стартовая пятерка'>
          {getFieldDecorator('firstFive', {
            rules: [{
              required: true,
              message: 'Выберите стартовую пятерку',
            }],
          })(
            <Select
              placeholder='Стартовая пятерка'
              mode="tags"
            >
              {
                players.map(player =>
                  <Option
                    key={player.id}
                  >
                    {player.name}
                  </Option>
                )
              }
            </Select>
          )}
        </Form.Item>
        <Form.Item label='Кто выиграл вбрасывание'>
          {getFieldDecorator('tossing', {
            rules: [{required: true, message: 'Укажите кто выиграл вбрасывание'}],
          })(
            <Select
              type="text"
              placeholder="Вбрасывание выиграла команда"
            >
              <Option key={0}>Зенит</Option>
              <Option key={1}>{rival.name}</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label='Кто первым забил двухочковый'>
          {getFieldDecorator('twoScore', {
            rules: [{required: true, message: 'Укажите кто первым забил два очка'}],
          })(
            <Select
              placeholder='Первым забил два очка'
            >
              {
                players.map(player =>
                  <Option
                    key={player.id}
                  >
                    {player.name}
                  </Option>
                )
              }
            </Select>
          )}
        </Form.Item>
        <Form.Item label='Кто первым забил трехочковый'>
          {getFieldDecorator('threeScore', {
            rules: [{required: true, message: 'Укажите кто первым забил два очка'}],
          })(
            <Select
              placeholder='Первым забил два очка'
            >
              {
                players.map(player =>
                  <Option
                    key={player.id}
                  >
                    {player.name}
                  </Option>
                )
              }
            </Select>
          )}
        </Form.Item>
        <Form.Item label='Счет'>
          <Input.Group compact>
            {getFieldDecorator('clubScore', {
              rules: [{required: true, message: 'Укажите место проведения'}],
            })(
              <Input
                type="number"
                placeholder="Зенит"
                style={{width: '50%'}}
              />,
            )}
            {getFieldDecorator('rivalScore', {
              rules: [{required: true, message: 'Укажите место проведения'}],
            })(
              <Input
                type="number"
                placeholder={rival.name}
                style={{width: '50%'}}
              />,
            )}
          </Input.Group>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Объявить результат
          </Button>
        </Form.Item>
      </Form>
    )
  });

  render() {
    const {activeModal} = this.state;
    const {matches} = this.props.context.state;
    const {CreateMatchForm, MatchResultsForm} = this;
    return (
      <div className='rivals'>
        <Table
          dataSource={matches}
          columns={this.renderColumns()}
          rowKey={(record) => record.id}
        />
        <Button
          type='primary'
          onClick={() => this.setState({activeModal: MODALS.ADD_MATCH})}
          style={{marginTop: 15}}
        >
          Добавить
        </Button>
        <Modal
          title="Добавить матч"
          visible={activeModal === MODALS.ADD_MATCH}
          onCancel={this.onModalClose}
          footer={false}
        >
          <CreateMatchForm/>
        </Modal>
        <Modal
          title="Итоги матча"
          visible={activeModal === MODALS.EDIT_MATCH}
          onCancel={this.onModalClose}
          footer={false}
        >
          <MatchResultsForm/>
        </Modal>
      </div>
    )
  }
}

export default withAppContext(Matches);
