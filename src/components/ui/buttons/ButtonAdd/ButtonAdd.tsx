import { ButtonProps } from 'react-html-props'

import styles from './ButtonAdd.module.css'

function BtnAdd({ children, ...props }: ButtonProps) {
	return (
		<button className={styles['btn-add']} {...props}>
			+ Добавить {children}
		</button>
	)
}

export default BtnAdd
