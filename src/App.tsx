import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6b35',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;