import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import { RouterProvider } from 'react-router-dom';
import { theme } from './styles/theme.ts';
import { GlobalStyle } from './styles/GlobalStyles.ts';
import { router } from './routes/routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
);
