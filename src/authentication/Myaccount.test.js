import React from 'react';
import ReactDOM from 'react-dom';
import Myaccount from './Myaccount';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Myaccount />, div);
  ReactDOM.unmountComponentAtNode(div);
});