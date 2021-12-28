import React from 'react'
import SbEditable from 'storyblok-react'
 
const Teaser = ({data, level}) => {
  if(level==='data'){
    var content = data.story.content;
  } else {
    var content = data;
  }
  return (
    <SbEditable content={content}>
      <div className="">
        <div className="">
          <h2 className="">{content.headline}</h2>
          <figure>
            <img src={content.image.filename}
            alt={content.image.alt} className="" />
            <figcaption className="">{content.caption}</figcaption>
          </figure>
        </div>
      </div>
    </SbEditable>
  )
}
 
export default Teaser