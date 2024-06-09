'use client'; // Ensures this component is treated as a client-side component

import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
