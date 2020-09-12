import React, { useState } from 'react';

import style from './styles/main.module.scss';

import Navigation from './components/navigation'
import Timer from './components/timer'
import Controls from './components/controls'

const INIT_TIMER = { min: 2, sec: 59, on: false }

const App = () => {
  const [timer, setTimer] = useState(INIT_TIMER)

  const props = { timer, setTimer, INIT_TIMER }
  return (
    <div className={style.main}>
      <Navigation />
      <Timer {...props} />
      <Controls {...props} />
    </div>
  );
}

export default App;
