import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Studio.module.scss"
import { getData } from "../utils/storyblok"



const Studio = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;

  } else {
    var content = data;
  }
  const [movies, setMovies] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'movie', 'studios').then(
    function (result) {
      setMovies(result.data.stories);
    });
  //returning the HTML
  return (
    <SbEditable content={content} key={data.uuid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.studio}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
        </div>
        <div className={styles.logo}>
          <img src={content.logo.filename} />
        </div>
        <div className={styles.description}>
          {render(content.description)}
        </div>
        <div>
          {movies.map((item, index) => (
            <div>
              <a href={`/${item.full_slug}`} className="">{item.content.title}</a>
            </div>
          ))}
        </div>
      </main>
    </SbEditable>
  )
}

export default Studio
