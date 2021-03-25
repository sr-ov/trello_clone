import { v4 as uuidv4 } from 'uuid'

export const initialState = {
	inModal: null,
	selects: {},
	openAddNewModal: null,
	columns: [
		{
			id: uuidv4(),
			titleCol: 'Важные дела',
			notes: [
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: '',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: '',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: '',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: '',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то важное дело',
					descNote: '',
				},
			],
		},
		{
			id: uuidv4(),
			titleCol: 'Неважные дела',
			notes: [
				{
					id: uuidv4(),
					titleNote: 'Какое-то неважное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то неважное дело',
					descNote: 'текст .......',
				},
			],
		},
		{
			id: uuidv4(),
			titleCol: 'Законченные дела',
			notes: [
				{
					id: uuidv4(),
					titleNote: 'Какое-то законченное дело',
					descNote: 'текст .......',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то законченное дело',
					descNote: '',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то законченное дело',
					descNote: '',
				},
				{
					id: uuidv4(),
					titleNote: 'Какое-то законченное дело',
					descNote: 'текст .......',
				},
			],
		},
	],
}
