import React from 'react'
import styles from './SimpleImageContainer.css'

const SimpleImageContainer = props => (<div className={styles.container} style={{backgroundImage: `url(${props.src})`}}>&nbsp;</div>)

export default SimpleImageContainer