import React from 'react'
import styles from './ComponentSample.css'
import SimpleImageContainer from './SimpleImageContainer'

const ComponentSample = props => {
	const data = [
		'http://68.media.tumblr.com/c1e68d6decffa2e2b6b475abf9f1e7ec/tumblr_o0s12h1EMH1tlvesjo1_400.jpg',
		'http://68.media.tumblr.com/517f3e0045cf2ad635dcec51660c1a9d/tumblr_nz6bj94Znm1rkyi3fo1_400.jpg',
		'http://68.media.tumblr.com/9fe21b44554c15de34dccb91b07abf9b/tumblr_o60dopc0l21thl461o1_400.jpg'
	]

	let images = data.map(url => {
		return <SimpleImageContainer src={url}/>
	})

	return (
		<div className={`${styles.container}`}>
			
			<h1 className={styles.header}>Profile</h1>
			
			<h2>Name: <a href='https://twitter.com/arisetyo' target='_blank' className={styles.emphasize}>{props.name}</a></h2>
			
			<p>Praesent leo quam, posuere sed dui sed, <span className={'redFont'}>interdum</span> cursus mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed feugiat risus ut metus mollis blandit. Vestibulum eu lectus nec elit mattis placerat ac quis urna. Fusce sed nulla malesuada purus commodo finibus. Curabitur placerat est sit amet neque molestie, et sodales lorem pretium. Vestibulum iaculis vitae erat vulputate elementum. Pellentesque sit amet velit id purus lobortis fringilla ut eu lorem. Sed fermentum nunc nec ligula rhoncus, et egestas odio vehicula. Suspendisse consequat lectus metus, nec fringilla justo feugiat sed. Ut aliquet sem in quam consequat, eget fringilla mi euismod.</p>
			
			{images}

			<p>Curabitur in dapibus metus. Mauris sed lacinia quam. Proin quis turpis vel ex faucibus vestibulum. Quisque eu justo a sapien consequat pulvinar. Phasellus et ex urna. Maecenas fringilla tempor aliquam. Donec iaculis nunc at tellus vulputate, at suscipit augue convallis. Nullam commodo leo ac lectus suscipit rutrum id ut diam. Cras tempor turpis vel ipsum bibendum, sit amet viverra metus vulputate. Aliquam id ante hendrerit ipsum iaculis lobortis quis nec ex.</p>
			<p>Sed sagittis nec erat non maximus. Proin consectetur sapien nec magna accumsan, nec ultrices nunc consequat. Morbi ut laoreet est, at malesuada elit. Nunc vel semper metus, non tristique dui. Sed eget suscipit metus. Etiam pellentesque metus ut sem consequat tristique. Sed luctus augue non aliquam varius.</p>
		
		</div>
	)
}

export default ComponentSample