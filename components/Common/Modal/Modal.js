import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

class Modal extends Component {
	render() {
		return (
			<div className="wrap-modal">
				<div
					className="close"
					onClick={() => {
						this.props.toggle(this.props.num);
					}}
				/>
				<div className="modal">
					<div className="modal-close">
						<span
							title="CERRAR"
							onClick={() => {
								this.props.toggle(this.props.num);
							}}
						>
							<FontAwesomeIcon icon={faTimes} />
						</span>
					</div>
					{this.props.content}
				</div>
			</div>
		);
	}
}

export default Modal;
<button>cerrar</button>;
