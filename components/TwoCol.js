import SbEditable from "storyblok-react"
import styles from "../styles/TwoCol.module.scss"
import DynamicComponent  from "./DynamicComponent";

const TwoCol = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  return (
    <SbEditable content={content}>
      <div className={styles.twocol}>
        <div className={styles.one}>
          {content.one ? content.one.map((content) =>
            <DynamicComponent data={content} key={content._uid} locale={locale} />
          ) : null}
        </div>
        <div className={styles.two}>
          {content.two ? content.two.map((content) =>
            <DynamicComponent data={content} key={content._uid} locale={locale} />
          ) : null}
        </div>
      </div>
    </SbEditable>
  )
}
export default TwoCol
