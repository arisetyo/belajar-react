import React from 'react'
import {Link} from 'react-router';

//Defining some inline styles for simplicity of example.
//On real world app it's better to use css module instead ;)
const navLinkStyle = {
	marginRight: 10 + 'px',
	color: 'teal'
}
const footerStyle = {
	position: 'absolute',
	bottom:  20 + 'px', left: 20 + 'px'
}
const contentStyle = {
	backgroundColor: '#eee',
	padding: 10 + 'px',
	position: 'absolute',
  bottom: 50 + 'px',
  top: 100 + 'px',
  left: 10 + 'px',
  right: 10 + 'px'
}

const Chrome = props => (
	<div>
		<nav>
			<h3>Test server-side React dengan fitur routing</h3>
			<Link style={navLinkStyle} to="/">Beranda</Link>
			<Link style={navLinkStyle} to="location">Lokasi</Link>
			<Link style={navLinkStyle} to="about">Tentang</Link>
		</nav>
		
		<div style={contentStyle}>
			{props.children}
		</div>

		<footer style={footerStyle}>
			<small><strong>&copy;2017</strong></small>
		</footer>
	</div>
)

export default Chrome