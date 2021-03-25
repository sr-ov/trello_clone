import { Columns } from './components/columns'
import Modals from './components/modals/Modals'

function App() {
	return (
		<div className="container">
			<div className="row">
				<Columns />
			</div>
			<Modals />
		</div>
	)
}

export default App

export const getCoords = (e) => {
	return {
		left: ~~e.target.getBoundingClientRect().left,
		top: ~~e.target.getBoundingClientRect().top,
	}
}
