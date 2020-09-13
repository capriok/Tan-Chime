import React from 'react'
import useLocalAnalytics from '../utils/useLocalAnalytics'
import format from '../utils/format'
import moment from 'moment';

import style from '../styles/controls.module.scss'

import { Button } from 'godspeed'

const Controls = ({ timer, setTimer, INIT_TIMER }) => {
	const TIME = format(timer.min, timer.sec)

	const { currentStorage, setNewAnalytics } = useLocalAnalytics()

	const start = () => {
		setTimer({ ...timer, on: true })
	}
	const Stop = () => {
		setNewAnalytics({
			id: currentStorage.length + 1,
			length: TIME,
			date: moment().format('l'),
			time: moment().format('LT')
		})
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
