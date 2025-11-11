import { Box, Typography, Button, Container } from '@mui/material';
import logo1 from '../assets/images/logo1.png';

const HeroSection = () => {
  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #4a7c7c 0%, #2d5a5a 100%)',
      minHeight: { xs: '400px', md: '500px' },
      position: 'relative',
      overflow: 'hidden',
      mt: 8
    }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, position: 'relative', zIndex: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center', 
          gap: { xs: 3, md: 4 },
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="overline" sx={{ 
              color: 'white', 
              fontWeight: 'bold', 
              fontSize: { xs: '12px', md: '14px' }
            }}>
              WELCOME TO PETZCARE CLINIC
            </Typography>
            <Typography variant="h2" sx={{ 
              my: 2, 
              fontWeight: 'bold', 
              color: 'white',
              fontSize: { xs: '2rem', md: '3.75rem' }
            }}>
              Compassionate Care for Your <span style={{ color: '#ffd700' }}>Beloved Pets</span>
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: 3, 
              color: 'rgba(255,255,255,0.8)', 
              lineHeight: 1.6,
              fontSize: { xs: '14px', md: '16px' }
            }}>
              At PetzCare Clinic, we provide comprehensive veterinary services with state-of-the-art facilities and experienced veterinarians. From routine check-ups to emergency care, we're dedicated to keeping your furry family members healthy and happy.
            </Typography>
            <Button variant="contained" size="large" sx={{ 
              backgroundColor: '#2d5a5a', 
              color: 'white',
              px: { xs: 3, md: 4 },
              py: 1.5,
              textTransform: 'none',
              fontSize: { xs: '14px', md: '16px' }
            }}>
              Book Appointment
            </Button>
          </Box>
          <Box sx={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            position: 'relative'
          }}>
            {/* Curved oval background */}
            <Box sx={{ 
              width: { xs: 220, md: 320 }, 
              height: { xs: 220, md: 320 }, 
              borderRadius: '50% 50% 50% 20%',
              backgroundColor: '#ffd700',
              position: 'absolute',
              zIndex: 1,
              transform: 'rotate(-15deg)'
            }} />
            <Box sx={{ 
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: 250, md: 350 },
              height: { xs: 250, md: 350 }
            }}>
              <img 
                src={logo1} 
                alt="PetzCare" 
                style={{ 
                  width: '95%', 
                  height: 'auto',
                  maxWidth: '350px'
                }} 
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        opacity: 0.1,
        backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.3) 2px, transparent 2px)',
        backgroundSize: '50px 50px'
      }} />
    </Box>
  );
};

export default HeroSection;