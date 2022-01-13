import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Accommodation.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"

const Accommodation = ({ data }) => {
  var content = data.story.content;
  var pictures = content.pictures;
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.studio}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
        </div>
        <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
        </div>
        <div className={styles.imagegallery}>
            <InPageSlideshow pictures={pictures}></InPageSlideshow>
        </div> 
        <div className={styles.description}>
          {render(content.description)}
        </div>
      </main>
    </SbEditable>
  )
}

export default Accommodation