import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Breadcrumbs from 'react-breadcrumbs'

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route name='Beranda' path='/' component={Home} />
				<Route name='Lokasi' path='location' component={Location}>
					<Route name="Ruang" path="/location/space" component={LocationSpace} />
					<Route name="Waktu" path="/location/time" component={LocationTime} />
				</Route>
				<Route name='Tim' path='team' component={Team}>
					<Route name='Kapten & Awak Kapal' path=':captainId' staticName={true} component={Crews}/>
				</Route>
				<Route name='404' path='*' component={NotFound} />
			</Router>
		)
	}
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const Nav = props => (
	<header>
		<Link to='/'>Beranda</Link>&nbsp;
		<Link to='/location'>Lokasi</Link>&nbsp;
		<Link to='/team'>Tim</Link>&nbsp;
	</header>
)

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const Home = props => (
	<div>
		<Nav/>
		
		<h1>Selamat datang di Semesta Star Trek</h1>
		
		<footer>
			<Breadcrumbs routes={props.routes} params={props.params}/>
		</footer>
	</div>
)

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const Location = props => (
	<div>
		<Nav/>
		<h2>Selamat bergabung di Federasi, kadet. Ini adalah kapal bintang Enterprise.</h2>
		
		<Link to='/location/space'>Ruang</Link>&nbsp;
		<Link to='/location/time'>Waktu</Link>
		
		{props.children}
		
		<footer>
			<Breadcrumbs routes={props.routes} params={props.params}/>
		</footer>
	</div>
)
const LocationSpace = () => (
	<div>
		<h2><em>"Somewhere in the galaxy where no man has gone before."</em></h2>
		<p>Ini adalah contoh penggunaan <em>nested route</em>, di mana route di bawah bertindak sebagai <em>children</em></p>
	</div>
)
const LocationTime = () => (
	<div>
		<h2>Antara abad 23 dan 24.</h2>
		<p>Contoh penggunaan <em>nested route</em>, komponen ini juga adalah <em>child</em> dari komponen Location.</p>
	</div>
)

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
let CrewMembers = [{captain: 'Kirk', crew: ['Spock', 'Scotty', 'McCoy', 'Uhura', 'Sulu', 'Chekov']}, {captain: 'Picard', crew: ['Riker', 'Data', 'LaForge', 'Worf', 'Crusher', 'Troi']}]

const Team = props => (
	<div>
		<Nav/>

		<h2>Pilih tim</h2>
		<ul>
			<li><Link to='/team/0'>James T. Kirk</Link></li>
			<li><Link to='/team/1'>Jean-Luc Picard</Link></li>
		</ul>
		
		{props.children}
		
		<footer>
			<Breadcrumbs routes={props.routes} params={props.params}/>
		</footer>
	</div>
)

const Crews = props => {
	const selectedId = props.params.captainId
	let captName = CrewMembers[selectedId].captain
	let crewNames = CrewMembers[selectedId].crew.join(', ')
	return (
		<div>
			<h2>Kamu memilih awak kapal dari Kapten {captName}:</h2>
			<h3>{crewNames}</h3>
			<p>Ini adalah contoh penggunaan parameter pada url/route. Perhatikan bahwa hanya terdapat 1 komponen Crews. Akan tetapi kontennya berubah-ubah tergantung nilai dari parameter <em>:captainId</em></p>
		</div>
	)
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const NotFound = () => <h1>Maaf, sepertinya kamu tersasar di dimensi lain.</h1>

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export default App

/**
 * TODO
 * Penggunaan browserHistory
 * Menggabungkan dengan React server-side
 */
