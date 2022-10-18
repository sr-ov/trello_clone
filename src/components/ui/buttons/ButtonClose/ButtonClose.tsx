import { ButtonProps } from 'react-html-props'

import { ReactComponent as CloseIcon } from '../../../../icons/close.svg'
import styles from './ButtonClose.module.css'

function ButtonClose(props: ButtonProps) {
	return (
		<button className={styles['btn-close']} {...props}>
			<CloseIcon width={15} height={15} />
		</button>
	)
}

export default ButtonClose
