import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const Application = () => {
  return (
    <HashRouter>
      <App/>
    </HashRouter>
  )
};

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();
