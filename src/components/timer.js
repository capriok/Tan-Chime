import React, { useEffect } from 'react'
import format from '../utils/format'

import style from '../styles/timer.module.scss'

import useSound from 'use-sound';
import CHIME_TONE from '../assets/chime_3s.mp3'

let VOLUME = 1
if (process.env.NODE_ENV === 'development') VOLUME = .6

const Timer = ({ timer, setTimer }) => {

	const TIME = format(timer.min, timer.sec)
	const [chime] = useSound(CHIME_TONE, { volume: VOLUME, playbackRate: .45 })

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

	useEffect(() => {
		let min = timer.min
		if (min === 0) return
		chime()
		if (min <= 1) return
		let count = 0
		let chimer = setInterval(() => {
			chime()
			count++
			if (count === min - 1) clearInterval(chimer)
		}, 750);
	}, [timer.min])

	return (
		<div className={style.timer}>
			<div className={style.time}>{TIME}</div>
		</div>
	)
}

export default Timer