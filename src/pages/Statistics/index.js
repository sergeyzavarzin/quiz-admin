import React from 'react';
import {Spin, Table} from 'antd';
import moment from 'moment';

import {withAppContext} from '../../contexts/AppContext';

const DATE_FORMAT = 'DD.MM.YYYY HH:mm';

const Statistics = props => {
  const {statistics, matches, isAppLoaded} = props.context.state;

  const renderColumns = () => {
    return [
      {
        title: 'Соперник',
        dataIndex: 'rival',
        render: (text, record) => {
          const {rivals} = props.context.state;
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
        title: 'Пролосовали',
        dataIndex: 'hasVote',
        render: (text, {id}) => {
          const stat = statistics.matches.find(({match}) => match === id);
          return stat && (
            <span>{stat.voteAnswers}</span>
          )
        }
      }
    ];
  };

  return (
    <div className='statistics'>
      <h1>Статистика</h1>
      {
        statistics && isAppLoaded ?
          <div style={{fontSize: 16}}>
            <div>
              <span>Кол-во зарегистрировавшихся: </span><b>{statistics.users}</b>
            </div>
            <div style={{marginBottom: 20}}>
              <span>Кол-во голосовавших пользователей: </span><b>{statistics.activeUsers}</b>
            </div>
            <Table
              columns={renderColumns()}
              dataSource={matches.sort((a, b) => moment.utc(b.startDateTime).diff(moment.utc(a.startDateTime)))}
              rowKey={record => record.id}
              pagination={{pageSize: 20}}
            />
          </div> : <Spin size='large'/>
      }
    </div>
  )
};

export default withAppContext(Statistics)
