import './style.css'
import close from '../../icons/close.svg'

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
