import { memo, useEffect } from 'react'
import cNs from 'classnames'
import { useOnClickOutside } from '../../customHooks/useOnClickOutside'
import { Button } from '../btns'
import { TextArea } from '../textArea/'

function ColumnHeader({
	dragHandleProps,
	openSecModal,
	maskClick,
	refMask,
	show,
	hide,
	textAreaProps,
}) {
	useOnClickOutside(refMask, hide)

	useEffect(() => {
		if (maskClick) {
			textAreaProps.textAreaRef.current.focus()
			textAreaProps.textAreaRef.current.select()
		}
	}, [maskClick, textAreaProps.textAreaRef])

	return (
		<div className="column-header">
			<div className="header-wrapper">
				<div
					ref={refMask}
					{...dragHandleProps}
					onClick={show}
					className={cNs('mask', { hide: maskClick })}
				></div>
				<TextArea {...textAreaProps} />
			</div>

			<Button
				onClickFn={openSecModal}
				className="btn-primary"
				style={{
					width: 25,
					height: 25,
					marginLeft: 10,
					marginTop: 10,
					position: 'relative',
				}}
			>
				<div className="dots"></div>
			</Button>
		</div>
	)
}

export default memo(ColumnHeader)
