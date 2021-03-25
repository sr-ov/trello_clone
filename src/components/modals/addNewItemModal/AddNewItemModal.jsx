import { useOnClickOutside } from '../../../customHooks/useOnClickOutside'

import { Button, BtnClose, BtnAdd } from '../../btns'
import { TextArea } from '../../textArea'

function AddNewItemModal({
	btnText,
	close,
	open,
	func,
	addPadding,
	openAddNewModal,
	textAreaRef,
	refModal,
	...props
}) {
	useOnClickOutside(refModal, close)

	return (
		<>
			{openAddNewModal ? (
				<div
					ref={refModal}
					style={{ padding: addPadding && 10, minWidth: 240 }}
				>
					<TextArea textAreaRef={textAreaRef} {...props} />
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Button
							style={{
								paddingTop: 8,
								paddingBottom: 8,
								width: '50%',
							}}
							onClickFn={func}
						>
							Добавить
						</Button>
						<BtnClose func={close} />
					</div>
				</div>
			) : (
				<BtnAdd open={open}>{btnText}</BtnAdd>
			)}
		</>
	)
}

export default AddNewItemModal
