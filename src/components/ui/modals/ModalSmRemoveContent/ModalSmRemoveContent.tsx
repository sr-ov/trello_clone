import { FC } from 'react'

import { Button } from '../../..'
import styles from './ModalSmRemoveContent.module.css'

interface ModalSmRemoveContentProps {
	onCancel: VoidFunction
	onConfirm: VoidFunction
}

const ModalSmRemoveContent: FC<ModalSmRemoveContentProps> = ({ onCancel, onConfirm }) => {
	return (
		<div className={styles.wrapper}>
			<Button onClick={onConfirm}>Да</Button>
			<Button onClick={onCancel}>Нет</Button>
		</div>
	)
}

export default ModalSmRemoveContent
