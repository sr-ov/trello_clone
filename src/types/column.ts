import { INote } from '.'

export interface IColumn {
	id: string
	title: string
	notes: INote[]
}
