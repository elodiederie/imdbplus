import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Intro.module.scss"
 
const Intro = ({data, level}) => {
  if(level==='data'){
    var content = data.story.content;
  } else {
    var content = data;
  }
  return (
    <SbEditable content={content} key={content._uid}>
      {/* <div className={[styles.movie, styles.test].join(' ')}> */}
      <div className={styles.intro}>
        <h1 className={styles.title}>
          {content.title}
        </h1>
        <div className={styles.introduction}>
          {render(content.introduction)}
        </div>
      </div>
    </SbEditable>
  )
}
 
export default Intro