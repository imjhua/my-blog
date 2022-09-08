import { css } from '@nfront/global-styles';

const globalStyles = css`
  html {
    scroll-behavior: smooth;
  }
  
  /* code theme */
  code{
    font-family: system-ui !important;
  }
  .gatsby-highlight pre:before {
    font-family: system-ui !important;
  }

  main > section {
    margin-top: 1.0rem !important;
    margin-bottom: 3.4rem !important;
  }
  main > section > div {
    margin-bottom: 0.6rem !important;
  }
  main > section > div > a{
    margin-left: 4px;
  }
  main > section > div > a:before {
    content:'-';
    display: inline-block;
    margin-right: 3px;
  }

  /* mobile */
  @media (max-width: 720px) {  
    pre{
      display: none !important;
    }
  }
  
  /* layout */
  html{
    font-size: 16px !important;
  }
  header{
    margin-bottom: 1rem !important;
  }
  ul, ol{
    padding-left: 24px !important;
    overflow: scroll !important;
  }
  ul > li{
    list-style: disc !important;
  }
  h1{
    text-transform: uppercase;
    font-size: 1.5rem !important;
  }
  h2{
    font-size: 1.2rem !important;
  }
  h3{
    font-size: 1.0rem !important;
  }
  h4{
    font-size: 1.0rem !important;
    margin-top: 1.8rem !important;
    margin-bottom: 0rem !important;
  }

  ul > li, p, a{
    font-size: 1rem !important;
  }

  a {
    color: var(--theme-ui-colors-text);

    text-decoration: none;
    &:-webkit-any-link{
      text-decoration: none;
    }
  }

  /* 
    hidden 
  */

  /* date */
  /* main > p, */
  main > section > div > p{
    display: none !important;
  }

  /* externalLinks */
  main > section:nth-of-type(2) > div > a[href*='/resume']{
    display: none !important;
  }
  header > div:last-child > div {
    display: none;
  }

  /* footer */
  footer > div:last-child{
    display: none;
  }

  /* link */
  a[href='/blog'],
  a[href='/tags']{
    display: none !important;
  }
`;

export default globalStyles;