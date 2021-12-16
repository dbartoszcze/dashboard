import React from 'react';
import ReactDOM from 'react-dom';

import Pages from './views/Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
