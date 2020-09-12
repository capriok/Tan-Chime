import React, { useEffect } from 'react'

import style from '../styles/timer.module.scss'

import useSound from 'use-sound';
import CHIME_TONE from '../assets/chime_3s.mp3'

const format = (int) => {
	if (int < 10) {
		let pad = '0' + int.toString()
		return pad
	}
	return int
}
const Timer = ({ timer, setTimer }) => {
	const TIME = `${format(timer.min)}:${format(timer.sec)}`

	const [chime] = useSound(CHIME_TONE, { volume: .6, playbackRate: .45, /* soundEnabled: false */ });

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
		console.log(min);
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