import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import {createMuiTheme} from '@material-ui/core';
import palette from './palette';
import typography from './typography';

const themeOptions: ThemeOptions = {
  palette,
  typography,
}

let theme = createMuiTheme(themeOptions);
// theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.up('sm')]: {
    fontSize: '60px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '80px',
  }
};

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.up('sm')]: {
    fontSize: '50px',
    lineHeight: '60px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '60px',
    lineHeight: '80px',
  }
};

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.up('sm')]: {
    fontSize: '40px',
    lineHeight: '60px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '50px',
  }
};

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.up('sm')]: {
    fontSize: '30px',
    lineHeight: '50px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '40px',
  }
};

theme.typography.h5 = {
  ...theme.typography.h5,
  [theme.breakpoints.up('sm')]: {
    fontSize: '28px',
    lineHeight: '40px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
  }
};

theme.typography.h6 = {
  ...theme.typography.h6,
  [theme.breakpoints.up('sm')]: {
    fontSize: '22px',
    lineHeight: '34px'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '26px',
  }
};

theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
    lineHeight: '40px',
  },
};

theme.typography.subtitle2 = {
  ...theme.typography.subtitle2,
  [theme.breakpoints.up('sm')]: {
    lineHeight: '30px',
    fontSize: '18px',
  }
};

theme.typography.body1 = {
  ...theme.typography.body1,
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
    letterSpacing: '0.2px',
    // lineHeight: '24px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
    // lineHeight: '30px',
    letterSpacing: '0.2px',
  }
};

theme.typography.body2 = {
  ...theme.typography.body2,
  [theme.breakpoints.up('sm')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
    letterSpacing: '0.2px',
    lineHeight: '26px',
  }
};

export default theme;
