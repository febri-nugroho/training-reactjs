import React from 'react'
import styles from '../../styling/CssStyle.module.css';

const Card = ({ imageSource, title}) => {
    return (
        <div className={styles.myGallery}>
            <div className={ styles.item }>
                <img src={imageSource} alt={title} />
                <span className={ styles.caption }>{ title }</span>
            </div>
        </div>
    )
}

export default Card
