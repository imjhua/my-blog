import { css } from '@nfront/global-styles';

const globalStyles = css`
  @media (max-width: 720px) {  
    pre{
      display: none !important;
    }
  }
  
  html{
    font-size: 14px !important;
  }
  header{
    margin-bottom: 1rem !important;
  }
  main > section{
    margin: 2rem 0 !important;
  }
  main > p{
    display: none !important;
  }
  code{
    font-family: system-ui !important;
  }
  .gatsby-highlight pre:before {
    font-family: system-ui !important;
  }

  ul, ol{
    padding-left: 24px !important;
    overflow: scroll !important;
  }
  /* h3, h4{
    margin-top: 1rem !important;
  } */
  h1{
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

  footer > div:last-child{
    display: none;
  }

  header > div:last-child > div {
    display: ${props => (props.resume ? 'block' : 'none')};
  }

  /* blog 및 View all tags 링크 숨김 */
  a[href='/blog'],
  a[href='/tags']{
    display: none;
  }
`;

export default globalStyles;