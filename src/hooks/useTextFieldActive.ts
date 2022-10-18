import { useRef, RefObject, useCallback } from 'react'
import { useUpdateEffect, useMount } from 'react-use'

import { TextField } from '../types'

const makeTextFieldActive = (ref: RefObject<TextField>) => {
	ref?.current?.focus()
	ref?.current?.select()
}

export const useTextFieldActive = ({
	isActive,
	isMountedActive,
}: {
	isActive?: boolean
	isMountedActive?: boolean
}): [RefObject<TextField>, VoidFunction] => {
	const textFieldRef = useRef<TextField>(null)

	useUpdateEffect(() => {
		isActive && makeTextFieldActive(textFieldRef)
	}, [isActive])

	useMount(() => {
		isMountedActive && makeTextFieldActive(textFieldRef)
	})

	return [textFieldRef, useCallback(() => makeTextFieldActive(textFieldRef), [])]
}
