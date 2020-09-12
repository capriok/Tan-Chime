import React from 'react'

import style from '../styles/controls.module.scss'

import { Button } from 'godspeed'

const Controls = ({ timer, setTimer, INIT_TIMER }) => {

	return (
		<div className={style.controls}>
			{
				timer.on
					? <>
						<Button text="Stop" onClick={() => setTimer(INIT_TIMER)} />
					</>
					: <Button text="Start Tanning" onClick={() => setTimer({ ...timer, on: true })} />
			}
		</div>
	)
}

export default Controls
