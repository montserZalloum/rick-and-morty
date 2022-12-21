import './fonts/stylesheet.css';
import './index.css';

import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
      fontFamily: 'Neucha, Arial',
  }
});

function Theme(props:any) {
  return (
    <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
  )
}

export default Theme