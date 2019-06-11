import React from 'react';

import {
  LoginHeader,
} from '../containers';

const App = () => (
  <div id='topApp' className='container'>
    <div id='headRow' className='row'>
      <div id='headingDiv' className='col-sm-8'>
        <h1>Kinnaris</h1>
      </div>
      <LoginHeader />
    </div>
  </div>
);

export default App;
