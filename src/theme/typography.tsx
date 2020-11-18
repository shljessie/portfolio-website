import createTypography, {TypographyOptions} from "@material-ui/core/styles/createTypography";

import palette from './palette';

const customTypography: TypographyOptions = {
  fontFamily: [
    'Noto Sans TC',
    'Lato',
    'Roboto',
    'Montserrat',
    'sans-serif',
  ].join(','),
  h1: {
    fontFamily: 'Noto Sans TC, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.2px',
    lineHeight: '120px',
    fontSize: '30px',
  },
  h2: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 800,
    lineHeight: '20px',
    fontSize: '26px',
    letterSpacing: '0.2px',
  },
  h3: {
    fontFamily: 'Noto Sans TC, sans-serif',
    fontWeight: 500,
    fontSize: '22px',
    letterSpacing: '0.2px',
    lineHeight: '18px',
  },
  h4: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '18px',
    letterSpacing: '0px',
    lineHeight: '24px',
  },
  h5: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    letterSpacing: '0.1px',
    lineHeight: '28px',
  },
  h6: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 700,
    fontSize: '16px',
    letterSpacing: '0.7px',
    lineHeight: '20px',
  },
  subtitle1: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    letterSpacing: '0.2px',
    lineHeight: '26px',
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: '12px',
    letterSpacing: '0.2px',
    lineHeight: '20px',
  },
  body1: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    letterSpacing: '0.2px',
    lineHeight: '23.92px',
  },
  body2: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '22px',
    letterSpacing: '0.2px',
    lineHeight: '20px',
  },
  button: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    letterSpacing: '1px',
    lineHeight: '20px',
    textTransform: 'none'
  },
  caption: {
    color: palette.text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px'
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase'
  }
};

const typography = createTypography(palette, customTypography)

export default typography
