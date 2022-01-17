import './App.scss';
import Bar from './Components/Bar/Bar';
import React from 'react';
import Trend from './Components/Trends/Trends';
import Main from './Components/Main/Main';

function App() {

  return <>

    <div className='wrap__app'>
      <Bar/>
      <Main/>
      <Trend/>
    </div>

  </>
}

export default App;
