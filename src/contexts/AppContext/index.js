import React, {Component} from 'react';
import axios from 'axios';

export const AppContext = React.createContext(true);

class AppProvider extends Component {

  state = {
    rivals: [],
    matches: [],
  };

  componentDidMount() {
    this.fetchMatches();
    this.fetchRivals();
  }

  fetchRivals = () => {
    axios
      .get('http://192.168.0.200:8080/rival')
      .then(response => this.setState({rivals: response.data}))
      .catch(err => console.log(err))
  };

  fetchMatches = () => {
    axios
      .get('http://192.168.0.200:8080/match')
      .then(response => this.setState({matches: response.data}))
      .catch(err => console.log(err))
  };

  createRival = (id, name, logo, cb) => {
    axios
      .post('http://192.168.0.200:8080/rival/create', {id, name, logo})
      .then(({data}) => this.setState(prevState => {
        return {rivals: [data, ...prevState.rivals]}
      }))
      .catch(err => console.log(err))
      .finally(() => cb && cb());
  };

  createMatch = (id, rivalId, place, startDateTime, cb) => {
    axios
      .post('http://192.168.0.200:8080/match/create', {id, rivalId, place, startDateTime})
      .then(({data}) => this.setState(prevState => {
        return {matches: [data, ...prevState.matches]}
      }))
      .catch(err => console.log(err))
      .finally(() => cb && cb());
  };

  setMatchResults = (id, firstFive, score, twoScore, threeScore, tossing, cb) => {
    axios
      .post(`http://192.168.0.200:8080/match/${id}/update`, {firstFive, score, twoScore, threeScore, tossing})
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
          fetchMatches: this.fetchMatches,
          fetchRivals: this.fetchRivals,
          createRival: this.createRival,
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
