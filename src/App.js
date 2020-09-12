import React, { useState } from 'react';

import style from './styles/main.module.scss';

import { Button } from 'godspeed'
import Timer from './components/timer'

const INIT_TIMER = { min: 0, sec: 0, on: false }

const App = () => {
  const [timer, setTimer] = useState(INIT_TIMER)

  return (
    <div className={style.main}>
      <Timer timer={timer} setTimer={setTimer} />
      <div className={style.controls}>
        {
          timer.on
            ? <>
              <Button text="Stop" size="xsm" onClick={() => setTimer(INIT_TIMER)} />
            </>
            : <Button text="Start Tanning" size="xsm" onClick={() => setTimer({ ...timer, on: true })} />
        }

      </div>
    </div>
  );
}

export default App;
