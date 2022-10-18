import { forwardRef } from 'react'
import cn from 'classnames'
import { DivProps } from 'react-html-props'

import { ButtonClose } from '../../..'
import styles from './ModalSm.module.css'

interface ModalSmProps extends DivProps {
	onClose: VoidFunction
	titleModal: string
}

const ModalSm = forwardRef<HTMLDivElement, ModalSmProps>(
	({ children, className, onClose, titleModal }, ref) => {
		return (
			<div className={cn(styles.modalSm, className)} ref={ref}>
				<div className={styles.modalSm__header}>
					<span>{titleModal}</span>
					<ButtonClose onClick={onClose} />
				</div>
				{children}
			</div>
		)
	}
)

export default ModalSm
