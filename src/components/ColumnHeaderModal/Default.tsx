import { FC } from 'react'

import { Button } from '..'

interface DefaultProps {
	setCopy: VoidFunction
	setRemove: VoidFunction
}

const Default: FC<DefaultProps> = ({ setCopy, setRemove }) => {
	return (
		<>
			<Button onClick={setCopy} withMargin>
				Копировать
			</Button>
			<Button onClick={setRemove}>Удалить</Button>
		</>
	)
}

export default Default
