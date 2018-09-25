'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import FirstScreen from './components/FirstScreen';

window.onload = () => {
  ReactDOM.render(<FirstScreen/>, document.getElementById('main'));
};
