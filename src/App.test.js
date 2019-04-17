import React from 'react';
import ReactDOM from 'react-dom';
import MainBody from './components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainBody />, div);
  ReactDOM.unmountComponentAtNode(div);
});
