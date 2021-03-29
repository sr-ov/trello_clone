import { addCur } from '../../../helpers'

const Selects = ({ value, id, func, arr, labelText, ending }) => {
	const change = (e) =>
		func({
			val: e.target.value,
			index: e.target.selectedIndex,
		})

	return (
		<div className="secondary-modal-body-item">
			<label>{labelText}</label>
			<select
				className="secondary-modal-body-select btn-primary"
				onChange={change}
				value={value}
			>
				{arr.map((el, i) => (
					<option value={el.id} key={i}>
						{addCur(el.id === id, el.titleCol || i + 1, ending)}
					</option>
				))}
			</select>
		</div>
	)
}
export default Selects
