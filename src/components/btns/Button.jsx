import React from 'react'
import './style.css'

function Button({ onClickFn, children, style }) {
	return (
		<button onClick={onClickFn} style={style} className="btn-primary">
			{children}
		</button>
	)
}

export default React.memo(Button)
