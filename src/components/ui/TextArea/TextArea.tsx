import { forwardRef } from 'react'
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize'

import styles from './TextArea.module.css'

interface ITextAreaProps extends TextareaAutosizeProps {}

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>((props, ref) => {
	return <TextareaAutosize className={styles.textarea} ref={ref} {...props} />
})

export default TextArea
