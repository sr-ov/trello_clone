import { IColumn } from '../../types'

export interface CurrentItem {
	indexCol: number
	indexNote: number
}

export interface State {
	currentItem: CurrentItem
	columns: IColumn[]
}
