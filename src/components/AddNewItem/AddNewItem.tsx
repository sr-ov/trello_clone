import { useToggle } from 'react-use'
import cn from 'classnames'
import { pipe, isEmpty } from 'ramda'

import { TextArea, ButtonAdd, ButtonClose, Button } from '..'
import { useClickAway, useTextField, useTextFieldActive } from '../../hooks'
import styles from './AddNewItem.module.css'

interface AddNewItemProps {
	btnText: string
	withPadding?: boolean
	minRows?: number
	onAddNewItem(value: string): void
}

function AddNewItem({ btnText, withPadding, minRows, onAddNewItem }: AddNewItemProps) {
	const [isOpenAddNewItem, setIsOpenAddNewItem] = useToggle(false)
	const { value: textAreaValue, onChange, setEmptyValue } = useTextField('')
	const [textAreaRef, makeTextAreaActive] = useTextFieldActive({
		isActive: isOpenAddNewItem,
	})
	const onCloseAddNewItem = pipe(setIsOpenAddNewItem, setEmptyValue)
	const modalRef = useClickAway<HTMLDivElement>(onCloseAddNewItem)

	const addNewItem = () => {
		if (isEmpty(textAreaValue)) return

		onAddNewItem(textAreaValue)
		makeTextAreaActive()
	}

	return isOpenAddNewItem ? (
		<div className={cn({ [styles.withPadding]: withPadding })} ref={modalRef}>
			<TextArea
				ref={textAreaRef}
				minRows={minRows}
				value={textAreaValue}
				onChange={onChange}
			/>
			<div className={styles.buttonsWrapper}>
				<Button onClick={addNewItem}>Добавить</Button>
				<ButtonClose onClick={onCloseAddNewItem} />
			</div>
		</div>
	) : (
		<ButtonAdd onClick={setIsOpenAddNewItem}>{btnText}</ButtonAdd>
	)
}

export default AddNewItem
