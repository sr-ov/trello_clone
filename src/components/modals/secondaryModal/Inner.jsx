import { useSelector } from 'react-redux'
import { Selects } from '.'
import { Button } from '../../btns'
import { TextArea } from '../../textArea'


function Inner({
	func,
	text,
	move,
	showTextArea,
	textAreaRef,
	changeSelectsCols,
	changeSelectsNotes,
}) {
	const data = useSelector(({ dataReducer }) => {
		const {
			notes,
			selectCols,
			selectNotes,
			idNote,
			idCol,
		} = dataReducer.selects

		const checkMove = move && idCol === selectCols

		return [
			{
				arr: dataReducer.columns,
				value: selectCols,
				func: changeSelectsCols,
				id: idCol,
				labelText: 'Список',
				ending: 'текущий',
			},
			{
				arr: checkMove ? notes : notes.concat({ id: 'bottom' }),
				value: selectNotes,
				func: changeSelectsNotes,
				id: idNote,
				labelText: 'Позиция',
				ending: 'текущая',
			},
		]
	})

	const props = {
		focus: true,
		textAreaRef,
		placeholder: 'Введите название',
		stop: true,
		style: {
			paddingTop: 8,
			paddingBottom: 8,
			width: '100%',
			marginBottom: 20,
		},
	}

	return (
		<>
			{showTextArea && <TextArea {...props} />}
			<div>
				{data.map((el, i) => (
					<Selects key={i} {...el} />
				))}
				<div className="secondary-modal-footer">
					<Button style={{ marginTop: 30, width: '50%' }} onClickFn={func}>
						{text}
					</Button>
				</div>
			</div>
		</>
	)
}

export default Inner
