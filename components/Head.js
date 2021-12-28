import React from 'react'
import NextHead from 'next/head'

const Head = ({ title, description, ogtitle, ogdescription, ogimage, ogurl, ogsite_name }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="description" content={description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={ogurl} key="ogurl" />
    <meta property="og:image" content={ogimage} key="ogimage" />
    <meta property="og:site_name" content={ogsite_name} key="ogsitename" />
    <meta property="og:title" content={ogtitle} key="ogtitle" />
    <meta property="og:description" content={ogdescription} key="ogdesc" />
  </NextHead>
)

export default Head
