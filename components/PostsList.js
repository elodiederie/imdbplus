import React from "react";
import SbEditable from "storyblok-react";

const PostLists = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <ul className="">
        {blok.posts.map((post) => {
          const lang = post.lang === "default" ? "/en" : `/${post.lang}`;
          return (
            <li
              key={post.slug}
              className=""
            >
              <div className="">
                <span className="">
                  {`
                    ${new Date(post.created_at).getDay()}.
                    ${new Date(post.created_at).getMonth()}.
                    ${new Date(post.created_at).getFullYear()}`}
                </span>
              </div>
              <div className="">
                <a
                  className=""
                  href={`${lang}/blog/${post.slug}`}
                >
                  {post.content.title}
                </a>
                <p className="">{post.content.intro}</p>
              </div>
              <div className="">
                <a
                  className=""
                  href={`${lang}/blog/${post.slug}`}
                >
                  Read more
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </SbEditable>
  );
};

export default PostLists;
