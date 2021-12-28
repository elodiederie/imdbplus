import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/PersonalityList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const PersonalityList = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [items, setItems] = useState([]);
  getAllItems('personality').then(
    function (result) {
      setItems(result.data.stories);
    });

  return (

    <div>
      {items && items.length > 0 && <SmallCardList items={items} type="personality"></SmallCardList>}
    </div>

  );
};

export default PersonalityList;
