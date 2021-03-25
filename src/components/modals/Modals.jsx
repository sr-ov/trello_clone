import { useSelector } from 'react-redux'
import { MainModal } from './mainModal'
import { SecondaryModal } from './secondaryModal'

function Modals() {
	const isOpenMain = useSelector(({ anyReducer }) => anyReducer.modals.main)
	const isOpenSec = useSelector(({ anyReducer }) => anyReducer.modals.sec)
	return (
		<>
			{isOpenMain && <MainModal />}
			{isOpenSec && <SecondaryModal />}
		</>
	)
}

export default Modals
