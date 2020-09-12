import React from 'react'

import style from '../styles/navigation.module.scss'

import stopwatch from '../assets/stopwatch.png'
import analytics from '../assets/analytics.png'

const Navigation = () => {

	return (
		<div className={style.navigation}>
			<img src={stopwatch} alt="" />
			<img src={analytics} alt="" />
		</div>
	)
}

export default Navigation
