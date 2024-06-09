import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ThemeToggleButton from '@/components/ThemeToggleButton';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <ThemeToggleButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
