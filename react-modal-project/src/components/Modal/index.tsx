import React, {useRef} from 'react';
import styles from './index.module.sass'
import {Portal} from "../Portal";
import {useModalClose} from "../../hooks/useModalClose";

interface Props {
	visible: boolean;
	onClose: () => void;
}

export const Modal = ({visible, onClose}: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	
	useModalClose(ref, () => onClose())
	
	return (
		<>
			{visible &&
				<Portal>
					<div className={styles.overlay} ref={ref}>
						<div className={styles.modal}> I'm modal</div>
					</div>
				</Portal>
			}
		</>
	)
}
