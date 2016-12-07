import React, {Component} from 'react';

//Komponen utama
//Dibuat menggunakan class component
class ColorDisplay extends Component {
	constructor() {
		super()
		this.state = {color: 'ccc'}
		this.handleColorSelection = this.handleColorSelection.bind(this)
	}
	handleColorSelection(selectedColor) {
		this.setState({color: selectedColor})
	}
	render() {
		return (
			<div>
				<Display bgcol={this.state.color}/>
				<PresetButton preset="c00" onColorSelected={this.handleColorSelection}/>
				<PresetButton preset="0c0" onColorSelected={this.handleColorSelection}/>
				<PresetButton preset="00c" onColorSelected={this.handleColorSelection}/>
				<TextInput onColorSelected={this.handleColorSelection} currentColor={this.state.color}/>
			</div>
		);
	}
}
export default ColorDisplay;

//Komponen untuk memasukkan nilai hexadesimal warna
//Dibuat menggunakan functional component yang lebih ringkas
const TextInput = ({onColorSelected, currentColor}) => (
	<input type="text" onChange={event => onColorSelected(event.target.value)} value={currentColor}/>
)

//Komponen tombol dengan warna-warna preset
const PresetButton = ({preset, onColorSelected}) => (
	<button onClick={() => onColorSelected(preset)}><i style={{backgroundColor: '#' + preset}}>&nbsp;&nbsp;&nbsp;</i> {preset}</button>
)

//Komponen untuk menampilkan warna
const Display = ({bgcol}) => (
	<h1 style={{backgroundColor: '#' + bgcol}}>Ganti warna latar!</h1>
);