import { list } from '../mainModal/Sidebar'
import { Button } from '../../btns'

function InnerColActions({ setComponent }) {
	return (
		<>
			{list.slice(1).map(({ text }, i) => (
				<Button
					onClickFn={() => setComponent({ name: 'col', i })}
					className="btn-primary"
					key={text}
					style={{ justifyContent: 'start' }}
				>
					{text}
				</Button>
			))}
		</>
	)
}

export default InnerColActions
