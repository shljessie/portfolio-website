import createPalette, { PaletteOptions } from "@material-ui/core/styles/createPalette";

import red from '@material-ui/core/colors/red';

export const LINK_HOVER_COLOR = '#6D33F1'
export const GREY = '#8d8d8d'
export const LAVENDER = '#F7F6F9'
export const dialog = '#11161C';

const customPalette: PaletteOptions = {
  primary: {
    main: '#000',
  },
  secondary: {
    main: '#000',
  },
  error: {
    main: red.A400,
  },
  background: {
    paper: 'white',
    default: 'white'
  },
  action: {
    active: '#9300FF',
  },
  info: {
    main:'#33A9F4'
  },
};

const palette = createPalette(customPalette);

export default palette
