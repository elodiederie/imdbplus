import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/SurfspotList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const SurfspotList = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [items, setItems] = useState([]);
  getAllItems('surfspot').then(
    function (result) {
      setItems(result.data.stories);
    });

  return (

    <div>
      {items && items.length > 0 && <SmallCardList items={items} type="surfspot"></SmallCardList>}
    </div>

  );
};

export default SurfspotList;
