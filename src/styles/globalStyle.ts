import { css } from '@nfront/global-styles';

const globalStyles = css`
  footer > div:last-child{
    display: none;
  }

  header > div:last-child > div {
    display: ${props => (props.resume ? 'block' : 'none')};
  }
`;

export default globalStyles;