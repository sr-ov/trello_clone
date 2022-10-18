import { FC } from 'react'

import ReplaceCopyContent from './ReplaceCopyContent'
import { useSelect } from './useSelect'

interface ReplaceProps {
	onReplace: (payload: { idxCol: number; idxNote: number }) => void
}

const Replace: FC<ReplaceProps> = ({ onReplace }) => {
	const selectData = useSelect(true)

	return (
		<ReplaceCopyContent onAction={onReplace} buttonText="Переместить" {...selectData} />
	)
}

export default Replace
