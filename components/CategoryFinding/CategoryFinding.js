import React, { Component } from 'react';
import Link from 'next/link';
import './NoFinding.css';

class CategoryFinding extends Component {
	render() {
		// console.log(this.props.img_left);
		// console.log(this.props.link_left);
		// console.log(this.props.img_right);
		// console.log(this.props.link_right);
		return (
			<div className="finding-category">
				<Link href={'/categoria/[category]'} as={'/categoria/' + this.props.link_left}>
					<a>
						<img src={this.props.img_left} alt={this.props.link_left} />
					</a>
				</Link>
				<Link href={'/categoria/[category]'} as={'/categoria/' + this.props.link_right}>
					<a>
						<img src={this.props.img_right} alt={this.props.link_right} />
					</a>
				</Link>
			</div>
		);
	}
}

export default CategoryFinding;
