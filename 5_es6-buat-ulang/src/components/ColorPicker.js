import React, {Component} from 'react';

let intensityArr = Array.apply(null, Array(257)).map(function(_, i) {return i}).filter(function(i){ return i % 32 === 0 && i !== 0 });

//Komponen utama. Berisi set komponen pilihan warna.
class ColorPicker extends Component {
	constructor() {
		super()
		this.state = {blue_index: 0, sampled: [31, 31, 31]}
	}
	handleShiftLeft() {
		if(this.state.blue_index > 0) this.setState({blue_index: this.state.blue_index - 1});
		else return;
	}
	handleShiftRight() {
		if(this.state.blue_index < intensityArr.length - 1) this.setState({blue_index: this.state.blue_index + 1});
		else return;
	}
	handleSelection(val) {
		this.setState({sampled: val});
	}
	render() {
		let boxes = [],
				blue_hue = intensityArr[this.state.blue_index] - 1;

		for (let r=0; r<intensityArr.length; r++) {
			for (let g=0; g<intensityArr.length; g++) {
				let rgb_arr = [];
				rgb_arr.push(intensityArr[r] - 1);
				rgb_arr.push(intensityArr[g] - 1);
				rgb_arr.push(blue_hue);
				boxes.push(<ColorBox key={r + ',' + g + ',' + blue_hue} rgb={rgb_arr} rgbArraySelected={this.handleSelection.bind(this)}/>);
			}
		}

		return (
			<div className='colorpicker'>
				<ColorControls hue={this.state.blue_index} shiftLeft={this.handleShiftLeft.bind(this)} shiftRight={this.handleShiftRight.bind(this)}/>
				<ul>{boxes}</ul>
				<ColorSampling sample={this.state.sampled}/>
			</div>
		);
	}
}


//Komponen pilihan warna yang dapat diklik dan memberikan informasi warna
const ColorBox = ({rgbArraySelected, rgb}) => (
	<li style={{backgroundColor: `rgb(${rgb.join()})`}} className="boxstyle" onClick={() => rgbArraySelected(rgb)}><a href="#nowhere"></a></li>
)

//Komponen yang mengatur set warna
const ColorControls = ({shiftLeft, shiftRight, hue}) => (
	<div>
		<button onClick={shiftLeft}>&lt;</button>
		<button onClick={shiftRight}>&gt;</button>
		<small><em>Blue hue: <strong>{intensityArr[hue] - 1}</strong></em></small>
	</div>
)

//Komponen yang menampilkan warna terpilih
const ColorSampling = ({sample}) => (
	<div className="sampleContainerStyle">
		<div style={{backgroundColor: 'rgb(' + sample.join() + ')'}} className="sampleBoxStyle">&nbsp;</div>
		<div>
			<span>R: <strong>{sample[0]}</strong></span><br/>
			<span>G: <strong>{sample[1]}</strong></span><br/>
			<span>B: <strong>{sample[2]}</strong></span>
		</div>
	</div>
);

export default ColorPicker