export const removeFrom = <T>(arr: T[]) => {
	return {
		byIndex(idx: number) {
			const removedItem = arr[idx]
			arr.splice(idx, 1)

			return removedItem
		},
	}
}

export const addTo = <T>(arr: T[]) => {
	return {
		byIndex(idx: number, item: T) {
			arr.splice(idx, 0, item)
		},
	}
}
