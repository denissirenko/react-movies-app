import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Settings, Recommend } from './pages';
import { CssBaseline, Container, Box } from '@mui/material';
import { Navigation } from './components';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="settings" element={<Settings />}></Route>
            <Route path="recommend" element={<Recommend />}></Route>
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
