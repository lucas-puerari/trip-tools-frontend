'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';

import theme from '@/styles/theme';
import Header from '@/components/elements/header';

export default function Template({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">{children}</Container>
    </ThemeProvider>
  );
}
