import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Grid = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  return (
    <SbEditable content={content}>
      <ul className="">
        {content.columns.map((nestedBlok) => (
          <li key={nestedBlok._uid} className="">
            <DynamicComponent data={nestedBlok} />
          </li>
        )
        )}
      </ul>
    </SbEditable>
  )
}

export default Grid
