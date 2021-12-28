import React, { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/RelatedItemGallerySmall.module.scss"
import RelatedItemSmall from "./RelatedItemSmall"



const RelatedItemGallerySmall = ({ items, title, type }) => {

  return (
    <div className={styles.relateditemgallery}>
      <div className={styles.title}>{title}</div>
      <div className={styles.relateditems}>
        {items.map((item, index) => (
          <RelatedItemSmall title={item.content.title} picture={item.content.mainpicture.filename} url={item.full_slug} type={type} />
        ))}
      </div>
    </div>
  )
}

export default RelatedItemGallerySmall
