import { ChangeEvent, useRef, useState, useCallback } from 'react'

import { TextField } from '../types'

export const useTextField = (initialValue: string = '') => {
	const [value, setValue] = useState(initialValue)
	const _initialValue = useRef(initialValue)

	const setInitialValue = useCallback(() => {
		setValue(_initialValue.current)
	}, [])

	const setEmptyValue = useCallback(() => {
		setValue('')
	}, [])

	const onChange = useCallback((e: ChangeEvent<TextField>) => {
		setValue(e.currentTarget.value)
	}, [])

	return {
		setValue,
		value,
		onChange,
		setInitialValue,
		setEmptyValue,
	}
}
