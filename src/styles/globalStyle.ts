import { css } from '@nfront/global-styles';

const globalStyles = css`
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