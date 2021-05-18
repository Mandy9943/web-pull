import React, { Component } from 'react';
import './QuestionItem.css';
import Link from 'next/link';

class QuestionItem extends Component {
	render() {
		let responses = true;
		return (
			<div className="QuestionItem-list">
				<h5 className="title">Últimas Preguntas</h5>
				{this.props.questions.map((question, i) => (
					<section key={i} className="question-item">
						<h5 className="question-title">
							{question.content} &nbsp;&nbsp;
							<small style={{ color: 'black', fontWeight: '500', fontSize: 'smaller' }}>
								{question.created_since.split(' ')[0]}
							</small>
						</h5>
						{responses && <h5 className="responses-title">si tengo</h5>}
					</section>
				))}
				{this.props.questions.length === 0 ? (
					<span className="empty-question">Se el primero en preguntar.</span>
				) : null}

				{this.props.questions.length > 2 ? (
					<button
						onClick={() => {
							this.toggleModal(1);
						}}
						className="button-question-product-detail no-web"
					>
						Ver todas las preguntas
					</button>
				) : null}
				<footer className="footer-question no-web">
					<span>Publicación #{this.props.product_id}</span>{' '}
					<Link href="/ayuda">
						<a>¿Necesitas ayuda?</a>
					</Link>
				</footer>
			</div>
		);
	}
}

export default QuestionItem;
