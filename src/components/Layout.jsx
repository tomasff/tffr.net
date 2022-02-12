import { css, Global } from '@emotion/core'
import React from 'react'
import Helmet from 'react-helmet'

const globalStyle = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  del,
  dfn,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1.5;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html,
  button,
  input,
  textarea {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, Cantarell, Roboto, Helvetica, Arial, Noto Sans,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
`

const Layout = ({ children }) => (
  <div>
    <Global styles={globalStyle} />
    <Helmet defer={false}>
      <title>Tomás Fernandes</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
      <link rel="canonical" href="https://tomff.com" />
      <meta name="author" content="Tomás Fernandes" />
      <meta
        name="description"
        content="I'm a computer scientist at the University of Warwick with a passion for software engineering.
        I'm particularly interested in the applications of AI/algorithms to analyze data on a large scale and advancements towards general-purpose AI."
      />
    </Helmet>
    {children}
  </div>
)

export default Layout
