import React from 'react';
import {withAppContext} from '../../contexts/AppContext';

import './Notifications.scss';

class Notifications extends React.Component {
  state = {

  };

  componentDidMount() {

  }

  render() {
    return (
      <div className='notifications'>
        <h1>Уведомления</h1>
      </div>
    )
  }
}

export default withAppContext(Notifications)
