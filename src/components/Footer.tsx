import { Box, Container, Typography, Grid, Link } from '@mui/material';
import PetzCareLogo from '../assets/PetzCareLogo.svg';
import PhoneIcon from '../assets/icons/PhoneIcon.svg';
import EmailIcon from '../assets/icons/EmailIcon.svg';
import LocationIcon from '../assets/icons/LocationIcon.svg';

const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      background: 'linear-gradient(135deg, #2d5a5a 0%, #1a4040 100%)',
      color: 'white',
      py: 4
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between', 
          gap: { xs: 3, md: 4 },
          textAlign: { xs: 'center', md: 'left' }
        }}>
          {/* Project Name and Description */}
          <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '200px' } }}>
            <img src={PetzCareLogo} alt="PetzCare" style={{ height: '40px', marginBottom: '16px' }} />
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontSize: { xs: '12px', md: '14px' } }}>
              PetzCare is a full-service veterinary clinic providing comprehensive medical care for pets. We are committed to providing the highest quality veterinary care with compassion.
            </Typography>
          </Box>

          {/* Contact Us */}
          <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '200px' } }}>
            <Typography variant="h6" sx={{ color: '#ffd700', mb: 2, fontWeight: 'bold', fontSize: { xs: '16px', md: '18px' } }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <img src={PhoneIcon} alt="Phone" style={{ width: '20px', height: '20px' }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '12px', md: '14px' } }}>+91 8904811492</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <img src={EmailIcon} alt="Email" style={{ width: '20px', height: '20px' }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '12px', md: '14px' } }}>info@petzcare.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <img src={LocationIcon} alt="Location" style={{ width: '20px', height: '20px' }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '12px', md: '14px' } }}>Hyderabad, India</Typography>
              </Box>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '150px' } }}>
            <Typography variant="h6" sx={{ color: '#ffd700', mb: 2, fontWeight: 'bold', fontSize: { xs: '16px', md: '18px' } }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: { xs: '12px', md: '14px' } }}>About</Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: { xs: '12px', md: '14px' } }}>Services</Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: { xs: '12px', md: '14px' } }}>Pricing</Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: { xs: '12px', md: '14px' } }}>Contact</Link>
            </Box>
          </Box>

          {/* Support Links */}
          <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '150px' } }}>
            <Typography variant="h6" sx={{ color: '#ffd700', mb: 2, fontWeight: 'bold', fontSize: { xs: '16px', md: '18px' } }}>
              Support Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: { xs: '12px', md: '14px' } }}>Services</Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: { xs: '12px', md: '14px' } }}>Support</Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: { xs: '12px', md: '14px' } }}>Privacy Policy</Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: { xs: '12px', md: '14px' } }}>Terms</Link>
            </Box>
          </Box>
        </Box>
        
        {/* Copyright Section */}
        <Box sx={{ 
          borderTop: '1px solid rgba(255,255,255,0.2)', 
          mt: 4, 
          pt: 3, 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '11px', md: '12px' } }}>
            © {new Date().getFullYear()} PetzCare. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '11px', md: '12px' } }}>
            Powered by <Link href="https://kynix.co.in" target="_blank" sx={{ color: '#ffd700', textDecoration: 'none' }}>kynix.co.in</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;