import { FC } from 'react'

import { Button, TextArea } from '..'
import { useTextField, useTextFieldActive } from '../../hooks'

interface CopyProps {
	onCopy(value: string): void
}

const Copy: FC<CopyProps> = ({ onCopy }) => {
	const [textAreaRef] = useTextFieldActive({ isMountedActive: true })
	const { value, onChange } = useTextField('')

	return (
		<>
			<TextArea
				ref={textAreaRef}
				value={value}
				onChange={onChange}
				placeholder="Введите название"
			/>
			<Button onClick={() => onCopy(value)}>Копировать</Button>
		</>
	)
}

export default Copy
