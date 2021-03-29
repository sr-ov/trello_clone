export const array = () => ({
	del(iDel, arrDel) {
		this.saveEl = arrDel[iDel]
		arrDel.splice(iDel, 1)
		return this
	},
	addTo(iAdd, arrAdd, addEl = this.saveEl) {
		arrAdd.splice(iAdd, 0, addEl)
		return this
	},
})

export const getFound = (arr, id, found = []) => {
	for (let i = 0; i < arr.length; i++) {
		if (id === arr[i].id) {
			found.push({ i, arr, el: arr[i] })
		}

		if (arr[i].notes) {
			getFound(arr[i].notes, id, found)
		}

		if (found.length) {
			return found[0]
		}
	}
}

export const addCur = (check, text, ending) => (check ? `${text} ${ending}` : text)

export const getStyles = (idHover, idStart, ref) => {
	if (idHover !== idStart) {
		const minHeight =
			ref.current.clientHeight +
			document.querySelector(`[data-id="${idHover}"]`).clientHeight +
			10
		return minHeight
	}
	return 15
}

export const getCoords = (e) => {
	return {
		left: ~~e.target.getBoundingClientRect().left,
		top: ~~e.target.getBoundingClientRect().top,
	}
}
