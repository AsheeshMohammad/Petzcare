import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import FAQSection from './components/FAQSection';
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
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <FAQSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;