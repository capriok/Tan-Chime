import React, { useState } from 'react'
import useLocalAnalytics from '../utils/useLocalAnalytics'

import style from '../styles/analytics.module.scss'

import tools from '../assets/tools.png'
import remove from '../assets/x_black.png'

const Analytics = () => {
	const [options, setOptions] = useState(false)

	const { currentStorage, removeItem } = useLocalAnalytics()

	return (
		<div className={style.analytics}>
			<h1>Recent Sessions</h1>
			<div className={style.sessions}>
				{currentStorage !== null &&
					currentStorage.length > 0
					? <>
						<div className={style.session} >
							<span>Date</span>
							<span>Length</span>
							<span>Time</span>
							{options && <span>Delete</span>}
						</div>
						{currentStorage.map((item, i) => (
							<div className={style.session} key={i}>
								<span>{item.date}</span>
								<span>{item.length}</span>
								<span>{item.time}</span>
								{options &&
									<span onClick={() => removeItem(item.id)}>
										<img src={remove} alt="" />
									</span>
								}
							</div>
						))}
					</>
					: <div className={style.session}>No sessions found</div>
				}
			</div>
			<img src={tools} className={style.options} alt="" onClick={() => setOptions(!options)} />
		</div>
	)
}

export default Analytics
