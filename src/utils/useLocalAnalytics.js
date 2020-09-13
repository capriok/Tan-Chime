import { useState, useEffect } from 'react'

const useLocalAnalytics = () => {
	const [newAnalytics, setNewAnalytics] = useState({})
	const [currentStorage, setCurrentStorage] = useState(
		JSON.parse(localStorage.getItem('TC-analytics'))
	)

	useEffect(() => {
		let newStorage = []

		console.log(newAnalytics);
		if (currentStorage !== null) {
			newStorage.push(...currentStorage)
		}
		if (Object.keys(newAnalytics).length > 0) {
			newStorage.push(newAnalytics)
		}

		localStorage.setItem('TC-analytics', JSON.stringify(newStorage))
		setCurrentStorage(JSON.parse(localStorage.getItem('TC-analytics')))
	}, [newAnalytics])

	const removeItem = (id) => {
		let newStorage = currentStorage.filter(s => s.id !== id)
		localStorage.setItem('TC-analytics', JSON.stringify(newStorage))
		setCurrentStorage(JSON.parse(localStorage.getItem('TC-analytics')))
	}

	return { setNewAnalytics, currentStorage, removeItem }
}

export default useLocalAnalytics
