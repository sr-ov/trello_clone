import { createActionsHook } from 'react-redux-actions-hook'
import { dataSliceActions } from '../store/data'
import { noteModalSliceActions } from '../store/noteModal'

export const useActions = createActionsHook({
	...dataSliceActions,
	...noteModalSliceActions,
})
