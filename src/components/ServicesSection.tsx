import { Box, Typography, Container } from '@mui/material';
import logo4 from '../assets/images/logo4.png';

const services = [
  { icon: '🔍', title: 'Health Examinations', description: 'Comprehensive wellness exams and preventive care to detect health issues early and maintain your pet\'s optimal health' },
  { icon: '🎓', title: 'Surgical Services', description: 'Advanced surgical procedures performed by skilled veterinarians using modern equipment and techniques' },
  { icon: '📊', title: 'Diagnostic Testing', description: 'State-of-the-art laboratory services and imaging to accurately diagnose and monitor your pet\'s condition' },
  { icon: '⚙️', title: 'Emergency Care', description: '24/7 emergency services for urgent medical situations when your pet needs immediate attention' },
  { icon: '📚', title: 'Vaccination Programs', description: 'Complete immunization schedules to protect your pets from common diseases and maintain community health' },
  { icon: '📈', title: 'Dental Care', description: 'Professional dental cleanings and oral health treatments to prevent dental disease and maintain fresh breath' }
];

const ServicesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box sx={{ 
        position: 'relative', 
        height: { xs: 'auto', md: '600px' },
        display: { xs: 'block', md: 'relative' }
      }}>
        {/* Center Image */}
        <Box sx={{
          position: { xs: 'static', md: 'absolute' },
          top: { md: '50%' },
          left: { md: '50%' },
          transform: { md: 'translate(-50%, -50%)' },
          zIndex: 2,
          textAlign: { xs: 'center', md: 'initial' },
          mb: { xs: 4, md: 0 }
        }}>
          <img src={logo4} alt="Trainer" style={{ width: '250px', height: 'auto', maxWidth: '100%' }} />
        </Box>
        

        
        {/* Mobile: Stack all services vertically */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          {services.map((service, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, justifyContent: 'center' }}>
              <Box sx={{
                width: 50, height: 50, borderRadius: '50%', backgroundColor: '#ffd700',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
              }}>{service.icon}</Box>
              <Box sx={{ width: '220px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '14px' }}>{service.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4, fontSize: '12px' }}>
                  {service.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        
        {/* Desktop: Positioned layout */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {/* Top Left - Health Examinations */}
          <Box sx={{ position: 'absolute', top: 80, left: 120, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ textAlign: 'right', width: '140px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '14px' }}>Health Examinations</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.3, fontSize: '11px' }}>
                Comprehensive wellness exams and preventive care to detect health issues early
              </Typography>
            </Box>
            <Box sx={{
              width: 50, height: 50, borderRadius: '50%', backgroundColor: '#ffd700',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
            }}>🔍</Box>
          </Box>
          
          {/* Top Right - Surgical Services */}
          <Box sx={{ position: 'absolute', top: 80, right: 120, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{
              width: 50, height: 50, borderRadius: '50%', backgroundColor: '#ffd700',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
            }}>🎓</Box>
            <Box sx={{ width: '140px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '14px' }}>Surgical Services</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.3, fontSize: '11px' }}>
                Advanced surgical procedures performed by skilled veterinarians using modern equipment
              </Typography>
            </Box>
          </Box>
          
          {/* Middle Left - Diagnostic Testing */}
          <Box sx={{ position: 'absolute', top: '45%', left: 80, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ textAlign: 'right', width: '140px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '14px' }}>Diagnostic Testing</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.3, fontSize: '11px' }}>
                State-of-the-art laboratory services and imaging to accurately diagnose conditions
              </Typography>
            </Box>
            <Box sx={{
              width: 50, height: 50, borderRadius: '50%', backgroundColor: '#ffd700',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
            }}>📊</Box>
          </Box>
          
          {/* Middle Right - Emergency Care */}
          <Box sx={{ position: 'absolute', top: '45%', right: 80, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{
              width: 50, height: 50, borderRadius: '50%', backgroundColor: '#ffd700',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
            }}>⚙️</Box>
            <Box sx={{ width: '140px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '14px' }}>Emergency Care</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.3, fontSize: '11px' }}>
                24/7 emergency services for urgent medical situations when pets need immediate attention
              </Typography>
            </Box>
          </Box>
          
          {/* Bottom Left - Vaccination Programs */}
          <Box sx={{ position: 'absolute', bottom: 80, left: 120, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ textAlign: 'right', width: '140px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '14px' }}>Vaccination Programs</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.3, fontSize: '11px' }}>
                Complete immunization schedules to protect pets from common diseases
              </Typography>
            </Box>
            <Box sx={{
              width: 50, height: 50, borderRadius: '50%', backgroundColor: '#ffd700',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
            }}>📚</Box>
          </Box>
          
          {/* Bottom Right - Dental Care */}
          <Box sx={{ position: 'absolute', bottom: 80, right: 120, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{
              width: 50, height: 50, borderRadius: '50%', backgroundColor: '#ffd700',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
            }}>📈</Box>
            <Box sx={{ width: '140px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '14px' }}>Dental Care</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.3, fontSize: '11px' }}>
                Professional dental cleanings and oral health treatments to prevent dental disease
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ServicesSection;