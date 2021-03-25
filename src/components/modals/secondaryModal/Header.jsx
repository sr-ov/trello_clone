import { BtnClose } from '../../btns'

function Header({ headerText, close }) {
	return (
		<div className="secondary-modal-header">
			<span>{headerText}</span>
			<BtnClose func={close} />
		</div>
	)
}

export default Header
