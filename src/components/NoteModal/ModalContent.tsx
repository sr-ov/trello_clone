import { FC, ReactNode } from 'react'
import { DivProps } from 'react-html-props'

interface ModalContentProps extends DivProps {
	variant: number
	children: ReactNode[]
}

const ModalContent: FC<ModalContentProps> = ({ children, variant }) => {
	return <>{children[variant]}</>
}

export default ModalContent
