import React from "react";
import SbEditable from "storyblok-react";

const FeaturedPosts = ({ data, level }) => {
  if(level==='data'){
    var content = data.story.content;
  } else {
    var content = data;
  }
  return (
    <SbEditable content={content} key={content._uid}>
      <div className="" key={content._uid}>
        <div className="">
          <h2 className="">
            {content.title}
          </h2>
          <div className="" />
        </div>
        <ul className="">
          {content.posts.map((post) => {
            const lang = post.lang === "default" ? "/en" : `/${post.lang}`;

            return (
              <li key={post.slug} className="">
                <a
                  href={`${lang}/blog/${post.slug}`}
                  className=""
                >
                  <img src={post.content.image} className="" />
                  <h2 className="">
                    {post.content.title}
                  </h2>
                  <p className="">
                    {post.content.intro}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </SbEditable>
  );
};

export default FeaturedPosts;
