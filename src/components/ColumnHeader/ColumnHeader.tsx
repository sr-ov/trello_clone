import { memo, useCallback } from 'react'
import { useToggle } from 'react-use'
import cn from 'classnames'
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd'

import { Button, TextArea, ColumnHeaderModal } from '..'
import { ReactComponent as DotsIcon } from '../../icons/dots.svg'
import { useActions, useTextField, useTextFieldActive } from '../../hooks'
import styles from './ColumnHeader.module.css'

interface ColumnHeaderProps {
	title: string
	dragHandleProps: DraggableProvidedDragHandleProps
}

function ColumnHeader({ dragHandleProps, title: columnTitle }: ColumnHeaderProps) {
	const { changeColumnTitleAction } = useActions()
	const { value: title, onChange } = useTextField(columnTitle)
	const [isMaskVisible, setMaskVisible] = useToggle(false)
	const [isModalVisible, setModalVisible] = useToggle(false)
	const [textAreaRef] = useTextFieldActive({ isActive: isMaskVisible })

	const onChangeTitle = useCallback(() => {
		changeColumnTitleAction(title)
		setMaskVisible(false)
	}, [])

	return (
		<div className={styles['column-header']}>
			<div className={styles['header-wrapper']}>
				<div
					{...dragHandleProps}
					onClick={setMaskVisible}
					className={cn(styles.mask, { [styles.hide]: isMaskVisible })}
				></div>
				<TextArea
					onBlur={onChangeTitle}
					onChange={onChange}
					value={title}
					ref={textAreaRef}
				/>
			</div>

			<div className={styles.wrapper}>
				<Button className={styles.buttonDots} onClick={setModalVisible}>
					<DotsIcon height="20" />
				</Button>

				{isModalVisible && <ColumnHeaderModal onClose={setModalVisible} />}
			</div>
		</div>
	)
}

export default memo(ColumnHeader)
