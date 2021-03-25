import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { changeTextAction } from '../../store/reducers/dataReducer'
import './style.css'

function TextArea({ textAreaRef, placeholder, value, payload, style, focus, stop }) {
	const dispatch = useDispatch()
	const heightRef = useRef()
	const [val, setVal] = useState(value)

	const setHeight = () => {
		textAreaRef.current.style.height = heightRef.current
		textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
	}

	useEffect(() => {
		heightRef.current = textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`

		if (textAreaRef.current && focus) {
			textAreaRef.current.focus()
		}
	}, [textAreaRef, focus])

	const inputHandler = (e) => setVal(e.target.value)
	const changeText = () => dispatch(changeTextAction({ ...payload, val }))
	const check = val === value || stop

	return (
		<textarea
			onBlur={check ? null : changeText}
			onChange={inputHandler}
			onInput={setHeight}
			value={val}
			ref={textAreaRef}
			placeholder={placeholder}
			style={style}
			className="textarea"
		></textarea>
	)
}

export default TextArea
