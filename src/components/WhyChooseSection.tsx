import { Box, Typography, Container } from '@mui/material';
import logo3 from '../assets/images/logo3.png';
import PawBackground from '../assets/PawBackground.svg';

const features = [
  'Experienced Veterinarians With Advanced Training',
  'State-of-the-Art Medical Equipment & Facilities',
  'Compassionate Care Tailored to Each Pet',
  '24/7 Emergency Services & Support Available'
];

const WhyChooseSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center', 
        gap: { xs: 4, md: 6 },
        textAlign: { xs: 'center', md: 'left' }
      }}>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          {/* Curved circle background */}
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
            width: { xs: 280, md: 400 },
            height: { xs: 280, md: 400 }
          }}>
            <img 
              src={logo3} 
              alt="Pets" 
              style={{ 
                width: '85%', 
                height: 'auto',
                maxWidth: '320px'
              }} 
            />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ position: 'relative', mb: 3 }}>
            <Box sx={{
              position: 'absolute',
              top: -10,
              left: -30,
              width: 80,
              height: 80,
              backgroundImage: `url(${PawBackground})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              zIndex: 0
            }} />
            <Typography variant="h4" sx={{ 
              fontWeight: 'bold', 
              color: 'black',
              fontSize: { xs: '1.5rem', md: '2.125rem' },
              position: 'relative',
              zIndex: 1
            }}>
              Why Choose Us
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ 
            mb: 4, 
            color: 'text.secondary', 
            lineHeight: 1.6,
            fontSize: { xs: '14px', md: '16px' }
          }}>
            With over 15 years of experience in veterinary medicine, our dedicated team combines expertise with genuine love for animals. We treat every pet as if they were our own, ensuring the highest quality care in a comfortable, stress-free environment.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 2 } }}>
            {features.map((feature, index) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                <Box sx={{ 
                  minWidth: { xs: 35, md: 45 }, 
                  height: { xs: 35, md: 45 }, 
                  borderRadius: '50%', 
                  backgroundColor: '#ffd700', 
                  color: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: { xs: '16px', md: '20px' },
                  flexShrink: 0
                }}>
                  {String(index + 1).padStart(2, '0')}
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 'bold',
                    fontSize: { xs: '14px', md: '16px' },
                    lineHeight: 1.2
                  }}>
                    {feature.split(' ').slice(0, -2).join(' ')}
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 'bold',
                    fontSize: { xs: '14px', md: '16px' },
                    lineHeight: 1.2
                  }}>
                    {feature.split(' ').slice(-2).join(' ')}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default WhyChooseSection;