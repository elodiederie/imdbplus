import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Personality.module.scss"
import { getData } from "../utils/storyblok"
import InPageSlideshow from "./InPageSlideshow"
import RelatedItemGallery from "./RelatedItemGallery"

const Personality = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
    var countries = data.rels.filter(obj => {
      return content.nationality.includes(obj.uuid);
    });
  } else {
    var content = data;
  }

  const [products, setProducts] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'product', 'personalities').then(
    function (result) {
      setProducts(result.data.stories);
    });

  const [newsitems, setNewsitems] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'newsitem', 'personalities').then(
    function (result) {
      setNewsitems(result.data.stories);
    });

  // var genres = data.rels.filter(obj => {
  //   return content.genres.includes(obj.uuid);
  // })
  var pictures = content.pictures;

  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.personality}>
          <h1 className={styles.title}>
            {content.first_name} {content.last_name}
          </h1>
          <div className={styles.countrylist}>
            {countries.map((item, index) => (
              <div className={styles.country}>
                <img src={item.content.flag.filename}></img>
              </div>
            ))}
          </div>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}></div>
          <div className={styles.imagegallery}>
            <InPageSlideshow pictures={pictures}></InPageSlideshow>
          </div>
          <div className={styles.short}>
            {render(content.short)}
          </div>
          <div className={styles.bio}>
            {render(content.bio)}
          </div>
          {products&&products.length>0&&<RelatedItemGallery items={products} title="Merchandise" type="product"></RelatedItemGallery>}
          {newsitems&&newsitems.length>0&&<RelatedItemGallery items={newsitems} title="News" type="newsitem"></RelatedItemGallery>}
        </div>
      </main>
    </SbEditable>
  )
}

export default Personality
