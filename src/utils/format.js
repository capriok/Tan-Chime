const format = (minInt, secInt) => {
	if (minInt < 10) {
		let padMin = '0' + minInt.toString()
		if (secInt < 10) {
			let padSec = '0' + secInt.toString()
			return `${padMin}:${padSec}`
		}
		return `${padMin}:${secInt}`
	}
	return `${minInt}:${secInt}`
}

export default format