import React, { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/RelatedItem.module.scss"



const RelatedItem = ({ title, short, picture, url, type }) => {

  return (
    <a href={`/${url}`} className={`bg-shadow-${type} ${styles.relateditem}`}>
      <div >
        <div className={styles.mainpicture} style={{ backgroundImage: `url("${picture}")` }}>
        </div>
        <div className={styles.textpart}>
          <div className={styles.title}>
            {title}
          </div>
        </div>
      </div>
    </a>
  )
}

export default RelatedItem
