import { v4 as uuidv4 } from 'uuid'

import { State } from './types'

export const initialState: State = {
	currentItem: { indexCol: -1, indexNote: -1 },
	columns: [
		{
			id: uuidv4(),
			title: 'Важные дела',
			notes: [
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: '',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: '',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: '',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: '',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то важное дело',
					description: '',
				},
			],
		},
		{
			id: uuidv4(),
			title: 'Неважные дела',
			notes: [
				{
					id: uuidv4(),
					title: 'Какое-то неважное дело 1',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то неважное дело 2',
					description: 'текст .......',
				},
			],
		},
		{
			id: uuidv4(),
			title: 'Законченные дела',
			notes: [
				{
					id: uuidv4(),
					title: 'Какое-то законченное дело',
					description: 'текст .......',
				},
				{
					id: uuidv4(),
					title: 'Какое-то законченное дело',
					description: '',
				},
				{
					id: uuidv4(),
					title: 'Какое-то законченное дело',
					description: '',
				},
				{
					id: uuidv4(),
					title: 'Какое-то законченное дело',
					description: 'текст .......',
				},
			],
		},
	],
}
