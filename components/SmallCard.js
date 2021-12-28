import React, { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/SmallCard.module.scss"



const SmallCard = ({ lang, title, short, picture, url, type, price }) => {

  return (
    <a href={`/${url}`} className={`bg-shadow-${type} ${styles.item}`}>
      <div >
        <div className={styles.mainpicture} style={{ backgroundImage: `url("${picture}")` }}>
        </div>
        {price && <div className={styles.price}>${price}</div>}
        <div className={styles.textpart}>
          <div className={styles.title}>
            {title}
          </div>
        </div>
      </div>
    </a>
  )
}

export default SmallCard
