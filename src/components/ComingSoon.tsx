import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ 
          fontSize: '4rem', 
          mb: 3,
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
            '40%': { transform: 'translateY(-20px)' },
            '60%': { transform: 'translateY(-10px)' }
          }
        }}>
          🐕
        </Box>
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#2d5a5a', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
          Coming Soon
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, fontSize: { xs: '1rem', md: '1.25rem' } }}>
          We're working hard to bring you this page. Stay tuned for updates!
        </Typography>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#ffd700', 
            color: 'black', 
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            '&:hover': { backgroundColor: '#e6c200' }
          }}
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default ComingSoon;