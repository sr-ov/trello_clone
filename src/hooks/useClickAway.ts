import { useRef } from 'react'
import { useClickAway as _useClickAway } from 'react-use'

export const useClickAway = <THTMLElement extends HTMLElement>(cb: VoidFunction) => {
	const ref = useRef<THTMLElement>(null)

	_useClickAway(ref, cb)

	return ref
}
