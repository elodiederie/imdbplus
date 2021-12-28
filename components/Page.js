import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Page = ({ data, level }) => {
  if(level==='data'){
    var content = data.story.content;
  } else {
    var content = data;
  }
  if(data.story&&data.story.lang){
    var lang = data.story.lang;
  } else {
    var lang = 'default';
  }
  return (
    <SbEditable content={content}>
      <main>
        {content.body ? content.body.map((content) =>
          <DynamicComponent data={content} key={content._uid} locale={lang} />
        ) : null}
      </main>
    </SbEditable>
  )
}


export default Page
