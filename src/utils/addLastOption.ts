import { v4 as uuidv4 } from 'uuid'

export const addLastOption = (value: number) => ({
	id: uuidv4(),
	title: String(value + 1),
})
