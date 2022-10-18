import cn from 'classnames'
import { memo } from 'react'
import { ButtonProps } from 'react-html-props'

import styles from './Button.module.css'

interface IButtonProps extends ButtonProps {
	withMargin?: boolean
}

function Button({ children, className, withMargin, ...props }: IButtonProps) {
	return (
		<button
			className={cn(className, styles['btn-primary'], {
				[styles.withMargin]: withMargin,
			})}
			{...props}
		>
			{children}
		</button>
	)
}

export default memo(Button)
