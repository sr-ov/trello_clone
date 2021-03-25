import { useRef } from 'react'
import { useDispatch } from 'react-redux'

export const useTextArea = () => {
	const textAreaRef = useRef()
	const dispatch = useDispatch()

	const handler = (action) => {
		if (!textAreaRef.current) {
			return
		}
		textAreaRef.current.focus()
		const val = textAreaRef.current.value

		if (val) {
			dispatch(action(val))
			textAreaRef.current.value = ''
		}
	}

	return {
		textAreaRef,
		handler: (action) => handler(action),
	}
}
