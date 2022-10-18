import { FC, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { isEmpty } from 'ramda'

import { useTextField, useTextFieldActive } from '../../hooks'
import { TextArea } from '..'
import ReplaceCopyContent from './ReplaceCopyContent'
import { useSelect } from './useSelect'

interface CopyProps {
	onCopy: (payload: {
		title: string
		id: string
		idxCol: number
		idxNote: number
	}) => void
}

const Copy: FC<CopyProps> = ({ onCopy }) => {
	const selectData = useSelect()
	const [textAreaRef] = useTextFieldActive({ isMountedActive: true })
	const { onChange, value: title } = useTextField('')

	const onAction = useCallback(
		(payload: { idxCol: number; idxNote: number }) => {
			if (isEmpty(title)) return
			onCopy({ title, id: uuidv4(), ...payload })
		},
		[title, onCopy]
	)

	return (
		<ReplaceCopyContent onAction={onAction} buttonText="Копировать" {...selectData}>
			<TextArea
				ref={textAreaRef}
				placeholder="Введите название"
				value={title}
				onChange={onChange}
			/>
		</ReplaceCopyContent>
	)
}

export default Copy
