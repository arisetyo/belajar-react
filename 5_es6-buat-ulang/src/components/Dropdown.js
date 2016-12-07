import React, {Component} from 'react'

class DropList extends Component {
	handleClick(arrIndex) {
		console.log(`arrIndex ${arrIndex}`);
		this.props.onSelect(arrIndex);
	}
	render() {
		const data = this.props.data;
		
		let items = data.map((item, index) => {
			return (
				<li key={index} onClick={() => this.handleClick(index)}>{item.label}</li>
			)
		});

		return (
			<div className={'combobox ' + `${this.props.visibility ? '' : 'closed'}`}>
				<ul>{items}</ul>	
			</div>
		);
	}
}

const TextInput = props => (
	<input onClick={props.onInputClick} type="text" value={props.selectedItem}/>
);

class Dropdown extends Component {
	constructor() {
		super()
		this.state = {item: '', isComboboxShown: false, listData: [{id:101, label:'Mangga'}, {id:102, label:'Pisang'}, {id:103, label:'Jambu'}, {id:104, label:'Duku'}, {id:105, label:'Salak'}, {id:106, label:'Durian'}, {id:107, label:'Rambutan'}, {id:108, label:'Sawo'}]};
	}
	handleSelection(arrIndex) {
		this.setState({item: this.state.listData[arrIndex].label, isComboboxShown: false});
	}
	handleInputClick() {
		this.setState({isComboboxShown: true});
	}
	render() {
		return (
			<div>
				<TextInput selectedItem={this.state.item} onInputClick={this.handleInputClick.bind(this)}/>
				<DropList data={this.state.listData} onSelect={this.handleSelection.bind(this)} visibility={this.state.isComboboxShown}/>
			</div>
		);
	}
}
export default Dropdown
