import React, {Component} from 'react'
import $ from "jquery"

export const ItemDisplay = props => {
	const item = props.data
	return (
		<div className="topBorder">
			<strong>{item.name}</strong>
			<br/>
			&#9742;{item.phone}
			<p>{item.company.name}<br/><small>"{item.company.catchPhrase}"</small></p>
			<p>Alamat: {item.address.suite}, {item.address.street}, {item.address.city}</p>
		</div>
	)
}

class Tabular extends Component {
	constructor() {
		super()
		this.state = {data: []}
	}
	componentDidMount() {
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/users',
			dataType: 'json',
			cache: false,
			success: data => {
				this.setState({data: data});
			}
		});
	}
	render() {
		const items = this.state.data.map((item, index) => {
			return (<ItemDisplay key={index} data={item}/>)
		});

		return (
			<div>
				{items.length > 0 ? items : 'memuat...'}
			</div>
		);
	}
}

export default Tabular