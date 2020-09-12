import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTransition, animated } from 'react-spring'

import { StateProvider, initialState, stateReducer } from "./context";

import Landing from './components/landing'
import App from './app';

import style from './styles/app.module.scss';
import './index.scss';

function Index() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 3000)

  const transitions = useTransition(loading, null, {
    from: { opacity: 0 },
    enter: { position: 'absolute', left: '50%', transform: 'translate(-50%)', opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <StateProvider initialState={initialState} reducer={stateReducer}>
      {transitions.map(({ item, key, props }) => item
        ? <animated.div style={props} key={key}><Landing /></animated.div>
        : <animated.div style={props} key={key}><App /></animated.div>
      )}
      <div className={style.app_bg} />
    </StateProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))