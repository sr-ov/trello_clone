import './style.css'

function BtnAdd({ open, children }) {
	return (
		<button onClick={open} className="btn-add">
			+ Добавить {children}
		</button>
	)
}

export default BtnAdd
