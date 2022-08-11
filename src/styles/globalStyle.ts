import { css } from '@nfront/global-styles';

const globalStyles = css`
  footer > div:last-child{
    display: none;
  }

  header > div:last-child > div {
    display: ${props => (props.resume ? 'block' : 'none')};
  }

  /* View all tags 링크 숨김 */
  a[href='/tags']{
    display: none;
  }
`;

export default globalStyles;