import React, {Component} from 'react';
import axios from 'axios';

import {BASE_API_URL} from '../../constants/endpoints';

import {TYPES} from '../../constants/merchTypes';
import {queryParams} from '../../utils/queryParams';

export const AppContext = React.createContext(true);

class AppProvider extends Component {

  state = {
    isAppLoaded: false,
    rivals: [],
    matches: [],
    merch: [],
    orders: [],
    notifications: [],
    notificationList: [17188634, 127017464, 3918082],
    statistics: null,
  };

  componentDidMount() {
    if (localStorage.getItem('isAuth')) {
      this.loadAppData();
    }
  }

  loadAppData = () => {
    const {fetchMatches, fetchRivals, fetchMerch, fetchOrders, fetchStatistics} = this;
    Promise.all([fetchMatches(), fetchRivals(), fetchMerch(), fetchOrders(), fetchStatistics()])
      .then(([matches, rivals, merch, orders, statistics]) => this.setState({matches, rivals, merch, orders, statistics}))
      .finally(() => this.setState({isAppLoaded: true}))
  };

  fetchRivals = async () => {
    const rivals = await axios.get(`${BASE_API_URL}/rival`);
    return rivals.data;
  };

  fetchMatches = async () => {
    const matches = await axios.get(`${BASE_API_URL}/match`);
    return matches.data;
  };

  fetchMerch = async () => {
    const rivals = await axios.get(`${BASE_API_URL}/merch`);
    return rivals.data;
  };

  fetchOrders = async () => {
    const orders = await axios.get(`${BASE_API_URL}/order`);
    return orders.data;
  };

  fetchStatistics = async () => {
    const statistics = await axios.get(`${BASE_API_URL}/statistics`);
    return statistics.data;
  };

  createRival = (id, name, logo, cb) => {
    axios
      .post(`${BASE_API_URL}/rival/create`, {id, name, logo})
      .then(({data}) => this.setState(prevState => {
        return {rivals: [data, ...prevState.rivals]}
      }))
      .catch(err => console.log(err))
      .finally(() => cb && cb());
  };

  updateRival = (id, name, logo, cb) => {
    axios
      .post(`${BASE_API_URL}/rival/${id}/update`, {name, logo})
      .then(({data}) => this.setState(({rivals}) => {
        return {rivals: rivals.map(rival => rival.id === data.id ? data : rival)}
      }))
      .catch(err => console.log(err))
      .finally(() => cb && cb());
  };

  updateMerch = (id, name, image, price, description, type, cb = null) => {
    axios
      .post(`${BASE_API_URL}/merch/${id}/update`, {name, image, price, description, type})
      .then(({data}) => this.setState(({merch}) => {
        return {merch: merch.map(item => item.id === data.id ? data : item)}
      }))
      .catch(err => console.log(err))
      .finally(() => cb && cb());
  };

  createMatch = (id, rivalId, place, startDateTime, buyTicketsUrl, cb = null) => {
    axios
      .post(`${BASE_API_URL}/match/create`, {id, rivalId, place, startDateTime, buyTicketsUrl})
      .then(({data}) => this.setState(prevState => {
        return {matches: [data, ...prevState.matches]}
      }))
      .catch(err => console.log(err))
      .finally(() => cb && cb());
  };

  createMerch = (id, name, image, price, description, type, values, count, cb = null) => {
    const data = {id, name, image, price, description, type, count};
    axios
      .post(`${BASE_API_URL}/merch/create`, data)
      .then(({data}) => this.setState(prevState => {
          return {merch: [data, ...prevState.merch]}
        }, () => type === TYPES.DIGITAL ?
        this.createDigitalMerchValues(id, values, cb) : (!!cb && cb())
      ))
      .catch(err => console.log(err));
  };

  createDigitalMerchValues = (id, values, cb = null) => {
    const items = values.map(item => {
      return {
        merchId: id,
        orderId: 'null',
        value: item,
      }
    });
    axios
      .post(`${BASE_API_URL}/digital`, {items})
      .finally(() => !!cb && cb())
  };

  deleteMatch = (id) => {
    axios
      .post(`${BASE_API_URL}/match/${id}/delete`)
      .then(() => this.setState(({matches}) => {
        return {
          matches: matches.filter(item => item.id !== id)
        }
      }))
  };

  deleteRival = (id) => {
    axios
      .post(`${BASE_API_URL}/rival/${id}/delete`)
      .then(() => this.setState(({rivals}) => {
        return {
          rivals: rivals.filter(item => item.id !== id)
        }
      }))
  };

  deleteMerch = (id) => {
    axios
      .post(`${BASE_API_URL}/merch/${id}/delete`)
      .then(() => this.setState(({merch}) => {
        return {
          merch: merch.filter(item => item.id !== id)
        }
      }))
  };

  setMatchResults = (id, firstFive, score, twoScore, threeScore, tossing, cb) => {
    axios
      .post(`${BASE_API_URL}/match/${id}/setresult`, {firstFive, score, twoScore, threeScore, tossing: !!tossing})
      .then(({data}) => this.setState(prevState => {
        let matches = prevState.matches;
        const foundIndex = matches.findIndex(match => match.id === id);
        matches[foundIndex] = data;
        return {matches}
      }))
      .catch(err => console.log(err))
      .finally(() => cb && cb());
  };

  changeOrderStatus = (id, status, cb) => {
    axios
      .post(`${BASE_API_URL}/order/${id}/update`, {status})
      .then(({data}) => {
        this.setState(prevState => {
          return {
            orders: prevState.orders.map(item => item.id === data.id ? data : item)
          }
        }, () => cb && cb());
      })
      .catch(err => console.log(err));
  };

  fetchNotifications = async () => {
    const notifications = await axios.get(`${BASE_API_URL}/notifications`);
    this.setState({notifications: notifications.data});
  };

  fetchNotificationList = async () => {
    const notifications = await axios.get(`${BASE_API_URL}/user/notifications`);
    this.setState({notifications: notifications.data});
  };

  createNotification = async message => {
    const urlParams = queryParams({
      message,
      v: '5.103',
      group_id: '74457752',
      user_ids: this.state.notificationList.reduce((acc, curr) => acc + ',' + curr, '').slice(0, -1),
      access_token: '837c72b9837c72b9837c72b9ff8311feae8837c837c72b9ded1a1138037778cbe3cc363',
    });
    const url = `https://api.vk.com/method/notifications.sendMessage?${urlParams}`;
    const sendedNotification = await axios.get(url);
    console.log(sendedNotification);
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,

          createRival: this.createRival,
          createMatch: this.createMatch,
          createMerch: this.createMerch,

          updateRival: this.updateRival,
          updateMerch: this.updateMerch,

          deleteMerch: this.deleteMerch,
          deleteMatch: this.deleteMatch,
          deleteRival: this.deleteRival,

          setMatchResults: this.setMatchResults,
          changeOrderStatus: this.changeOrderStatus,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export function withAppContext(Component) {
  return function WrapperComponent(props) {
    return (
      <AppContext.Consumer>
        {state => <Component {...props} context={state}/>}
      </AppContext.Consumer>
    );
  };
}

export default AppProvider;
