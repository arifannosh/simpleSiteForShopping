import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from './containers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Products />, document.getElementById('root'));
serviceWorker.unregister();
