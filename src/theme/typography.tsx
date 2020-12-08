import createTypography, {TypographyOptions} from "@material-ui/core/styles/createTypography";

import palette from './palette';

const customTypography: TypographyOptions = {
  fontFamily: [
    'Noto Sans TC',
    'Lato',
    'Roboto',
    'Montserrat',
    'Open Sans',
    'sans-serif',
  ].join(','),
  h1: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.2px',
    lineHeight: '40px',
    fontSize: '60px',
  },
  h2: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 800,
    lineHeight: '20px',
    fontSize: '60px',
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
    fontSize: '40px',
    letterSpacing: '0px',
    lineHeight: '20px',
  },
  h5: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 800,
    fontSize: '20px',
    letterSpacing: '0.1px',
    lineHeight: '28px',
  },
  h6: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '20px',
    letterSpacing: '0.7px',
    lineHeight: '20px',
  },
  subtitle1: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    letterSpacing: '0.2px',
    lineHeight: '5px',
  },
  subtitle2: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    letterSpacing: '0.2px',
    lineHeight: '20px',
  },
  body1: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    letterSpacing: '0.1px',
    lineHeight: '23.92px',
  },
  body2: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 600,
    fontSize: '22px',
    letterSpacing: '0.2px',
    lineHeight: '20px',
  },
  button: {
    fontFamily: 'Monserrat, sans-serif',
    fontWeight: 500,
    fontStyle: 'medium',
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
