import React, {Component} from 'react'
import Raphael from 'webpack-raphael'

//Komponen tombol dengan warna-warna preset
const PresetButton = ({preset, onColorSelected}) => (
	<button onClick={() => onColorSelected(preset)}><i style={{backgroundColor: '#' + preset}}>&nbsp;&nbsp;&nbsp;</i> {preset}</button>
)

//Komponen utama, berisi elemen SVG
class SVGContainer extends Component {
	constructor() {
		super()
		this.paper = Raphael('svgCanvas', 400, 400)
	}
	componentDidMount() {
		this.rect = this.paper.rect(100, 100, 200, 200);
		this.rect.attr('fill', '#fff')
		this.rect.attr('stroke', '#fff')
	}
	handleColorSelection(selectedColor) {
		this.rect.attr('fill', '#'+selectedColor)
		this.rect.attr('stroke', '#'+selectedColor)
	}
	render() {
		return (
			<div>
				<PresetButton preset="c00" onColorSelected={this.handleColorSelection.bind(this)}/>
				<PresetButton preset="0c0" onColorSelected={this.handleColorSelection.bind(this)}/>
				<PresetButton preset="00c" onColorSelected={this.handleColorSelection.bind(this)}/>
			</div>
		)
	}
}

export default SVGContainer