import React, {Component} from 'react';
import axios from 'axios';

import { BASE_API_URL } from '../../constants/endpoints';

export const AppContext = React.createContext(true);

class AppProvider extends Component {

  state = {
    isAppLoaded: false,
    rivals: [],
    matches: [],
    merch: [],
  };

  componentDidMount() {
    this.loadAppData();
  }

  loadAppData = () => {
    const {fetchMatches, fetchRivals, fetchMerch} = this;
    Promise.all([fetchMatches(), fetchRivals(), fetchMerch()])
      .then(([matches, rivals, merch]) => this.setState({matches, rivals, merch}))
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

  createRival = (id, name, logo, cb) => {
    axios
      .post(`${BASE_API_URL}/rival/create`, {id, name, logo})
      .then(({data}) => this.setState(prevState => {
        return {rivals: [data, ...prevState.rivals]}
      }))
      .catch(err => console.log(err))
      .finally(() => cb && cb());
  };

  editRival = (id, name, logo, cb) => {
    axios
      .post(`${BASE_API_URL}/rival/${id}/update`, {name, logo})
      .then(({data}) => this.setState(({rivals}) => {
        console.log(data, rivals.map(rival => rival.id === data.id ? data : rival))
        return {rivals: rivals.map(rival => rival.id === data.id ? data : rival)}
      }))
      .catch(err => console.log(err))
      .finally(() => cb && cb());
  };

  createMatch = (id, rivalId, place, startDateTime, buyTicketsUrl, cb) => {
    axios
      .post(`${BASE_API_URL}/match/create`, {id, rivalId, place, startDateTime, buyTicketsUrl})
      .then(({data}) => this.setState(prevState => {
        return {matches: [data, ...prevState.matches]}
      }))
      .catch(err => console.log(err))
      .finally(() => cb && cb());
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

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          createRival: this.createRival,
          editRival: this.editRival,
          createMatch: this.createMatch,
          setMatchResults: this.setMatchResults,
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
        {state => <Component {...props} context={state} />}
      </AppContext.Consumer>
    );
  };
}

export default AppProvider;
