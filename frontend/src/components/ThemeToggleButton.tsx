'use client';
import React from 'react';
import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useThemeContext } from '@/context/ThemeContext';

const ThemeToggleButton = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default ThemeToggleButton;
