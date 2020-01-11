import React from 'react';
import { Spin } from 'antd';

import {withAppContext} from '../../contexts/AppContext';

const Statistics = props => {
  const {statistics} = props.context.state;
  return (
    <div className='statistics'>
      <h1>Статистика</h1>
      {
        statistics ?
        <div style={{fontSize: 16}}>
          <div>
            <span>Кол-во зарегистрировавшихся: </span><b>{statistics.users}</b>
          </div>
          <div>
            <span>Кол-во голосовавших пользователей: </span><b>{statistics.activeUsers}</b>
          </div>
        </div> : <Spin size='large'/>
      }
    </div>
  )
};

export default withAppContext(Statistics)
