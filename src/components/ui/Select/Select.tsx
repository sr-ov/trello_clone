import { FC, memo } from 'react'
import { SelectProps } from 'react-html-props'

import styles from './Select.module.css'

interface ISelectProps extends SelectProps {
	options: {
		id: string
		title: string
	}[]
	label: string
}

const Select: FC<ISelectProps> = ({ options, label, ...props }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.label}>{label}</div>
			<select className={styles.select} {...props}>
				{options.map(({ id, title }, index) => {
					return (
						<option key={id} value={index}>
							{title}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default memo(Select)
