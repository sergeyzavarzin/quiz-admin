import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import AppProvider from './contexts/AppContext';

const Application = () => {
  return (
    <HashRouter>
      <AppProvider>
        <App/>
      </AppProvider>
    </HashRouter>
  )
};

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();
