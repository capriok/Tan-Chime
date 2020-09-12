import React, { useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import style from './styles/main.module.scss';

import Navigation from './components/navigation'
import Timer from './components/timer'
import Controls from './components/controls'
import Analytics from './components/analytics'

const INIT_TIMER = { min: 0, sec: 0, on: false }

const App = () => {
  const [timer, setTimer] = useState(INIT_TIMER)

  const props = { timer, setTimer, INIT_TIMER }
  return (
    <div className={style.main}>
      <Router>
        <Navigation />
        <Route exact path='/' render={() => <>
          <Timer {...props} />
          <Controls {...props} />
        </>} />
        <Route exact path='/analytics' render={() => <>
          <Analytics />
        </>} />
      </Router>
    </div>
  );
}

export default App;
