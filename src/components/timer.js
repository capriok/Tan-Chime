import React, { useState, useEffect } from 'react'

import style from '../styles/main.module.scss'

const format = (int) => {
	if (int < 10) {
		let pad = '0' + int.toString()
		return pad
	}
	return int
}
const Timer = ({ timer, setTimer }) => {

	const TIME = `${format(timer.min)}:${format(timer.sec)}`

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (timer.on === true) {
				setTimer({ ...timer, sec: timer.sec + 1 })
				if (timer.sec === 59) {
					setTimer({ ...timer, min: timer.min + 1, sec: 0 })
				}
			}
		}, 1000);

		return () => {
			clearTimeout(timeout);
		}
	}, [timer.clock, timer.min, timer.sec, timer.on]);

	return (
		<div className={style.timer}>
			<p>{TIME}</p>
		</div>
	)
}

export default Timer

console.log()
