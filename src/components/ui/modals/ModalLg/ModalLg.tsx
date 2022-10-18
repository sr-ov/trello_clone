import { FC } from 'react'
import { DivProps } from 'react-html-props'
import cn from 'classnames'
import { Portal } from 'react-portal'

import styles from './ModalLg.module.css'

interface ModalLgProps extends DivProps {}

const ModalLg: FC<ModalLgProps> = ({ children, ...props }) => {
	return (
		<Portal>
			<div className={cn(styles.modal)} {...props}>
				<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>
		</Portal>
	)
}

export default ModalLg
