import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTransition, animated } from 'react-spring'

import AppLoad from './components/app-load'
import App from './App';

import './index.scss';

function Index() {
  const [loading, setLoading] = useState(false)
  setTimeout(() => setLoading(false), 3000)

  const transitions = useTransition(loading, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <>
      {transitions.map(({ item, key, props }) =>
        item
          ? <animated.div style={props} key={key}><AppLoad /></animated.div>
          : <animated.div style={props} key={key}><App /></animated.div>
      )}
    </>
  )
}


ReactDOM.render(<Index />, document.getElementById('root'))