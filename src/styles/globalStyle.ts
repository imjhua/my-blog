import { css } from '@nfront/global-styles';

/* TODO: eslint */
/* TODO: global style saas */

const globalStyles = css`
  html {
    scroll-behavior: smooth;
  }
  
  button{
    cursor: pointer;
    border-radius: 10px;
    transition: opacity 0s; 
    opacity: 1;
  }
  button:active{
    opacity: 0.7;
  }

  /* code theme */
  li > code{
    padding: 0 !important;
  }
  code{
    font-family: system-ui !important;
  }
  .gatsby-highlight{
    font-size: 15px !important;
  }
  .gatsby-highlight pre:before {
    right: 0 !important;
    left: inherit !important;
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
  @media (max-width: 400px) {  
    pre{
      display: none !important;
    }
  }

  @media (max-width: 420px) {  
    html {
      -moz-user-select: none;
          user-select: none;
      -webkit-user-select: none;
      /* 롱터치 long touch 막기 */
      -webkit-touch-callout: none;
      /* touch 시 나오는 음영 제거 */
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
    color: var(--theme-ui-colors-text) !important;

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
  header > div:last-child > div > a[href*='/resume']{
    display: none;
  }

  /* posts link */
  main > section:nth-of-type(2) > div > a[href*='/resume']{
    display: none !important;
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