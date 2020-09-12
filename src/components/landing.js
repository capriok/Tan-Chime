import React from 'react'

import style from '../styles/landing.module.scss'

import loadBG from '../assets/load-bg.jpg'
import loader from '../assets/loader.svg'

const AppLoad = () => {
	return (
		<div className={style.landing}>
			<div>
				<h1>Tan Chime</h1>
				<img className={style.loader} src={loader} alt="" />
				<img className={style.load_bg} src={loadBG} alt="" />
			</div>
		</div>
	)
}

export default AppLoad
