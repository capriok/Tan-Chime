import React from 'react'

import style from '../styles/controls.module.scss'

import { Button } from 'godspeed'

const Controls = ({ timer, setTimer, INIT_TIMER }) => {

	const start = () => {
		setTimer({ ...timer, on: true })
	}
	const Stop = () => {
		setTimer(INIT_TIMER)
	}

	return (
		<div className={style.controls}>
			{
				!timer.on
					? <Button text="Start" onClick={start} />
					: <Button text="Stop" onClick={Stop} />
			}
		</div>
	)
}

export default Controls
