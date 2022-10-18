import { RootState } from '..'

export const selectIsOpenNoteModal = ({ noteModal }: RootState) =>
	noteModal.isOpenNoteModal
