import SbEditable from "storyblok-react"
import styles from "../styles/Title.module.scss"
import DynamicComponent  from "./DynamicComponent";

const Title = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  return (
    <SbEditable content={content}>
      <div className={styles.title}>
        {content.title}
      </div>
    </SbEditable>
  )
}
export default Title
