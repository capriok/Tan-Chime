import React from 'react'
import { useStateValue } from '../context'
import { Link } from 'react-router-dom'

import style from '../styles/navigation.module.scss'

import stopwatch from '../assets/stopwatch.png'
import analytics from '../assets/analytics.png'

const Navigation = () => {
	const [{ }, dispatch] = useStateValue()

	return (
		<div className={style.navigation}>
			<Link to="/"><img src={stopwatch} alt="" /></Link>
			<Link to="/analytics"><img src={analytics} alt="" /></Link>
		</div>
	)
}

export default Navigation
