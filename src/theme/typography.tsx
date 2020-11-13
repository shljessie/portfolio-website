import palette from './palette';
import createTypography, {TypographyOptions} from "@material-ui/core/styles/createTypography";

const customTypography: TypographyOptions = {
  fontFamily: [
    'Noto Sans TC',
    'Lato',
    'Roboto',
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
    fontFamily: 'Noto Sans TC, sans-serif',
    fontWeight: 700,
    lineHeight: '36px',
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
    fontFamily: 'Lato, sans-serif',
    fontWeight: 600,
    fontSize: '18px',
    letterSpacing: '0px',
    lineHeight: '24px',
  },
  h5: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    letterSpacing: '0.1px',
    lineHeight: '28px',
  },
  h6: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400,
    fontSize: '18px',
    letterSpacing: '0.7px',
    lineHeight: '24px',
  },
  subtitle1: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
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
    fontSize: '14px',
    letterSpacing: '0.2px',
    lineHeight: '25px',
  },
  body2: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '0.2px',
    lineHeight: '22px',
  },
  button: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 700,
    fontSize: '16px',
    letterSpacing: '1px',
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
