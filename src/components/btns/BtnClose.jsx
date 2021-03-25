import close from '../../icons/close.svg'
import './style.css'

function BtnClose({ func }) {
	return (
		<button
			style={{ backgroundImage: `url(${close})` }}
			onClick={func}
			className="btn-close"
		></button>
	)
}

export default BtnClose
