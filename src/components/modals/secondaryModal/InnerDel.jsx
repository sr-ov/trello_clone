import { Button } from '../../btns'

function InnerDel({ del, close }) {
	return (
		<div style={{ display: 'flex' }}>
			<Button onClickFn={del} style={{ marginRight: 10 }}>
				Да
			</Button>
			<Button onClickFn={close} style={{ marginTop: 0 }}>
				Нет
			</Button>
		</div>
	)
}
export default InnerDel
