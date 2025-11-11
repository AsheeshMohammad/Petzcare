import { AppBar, Toolbar, Box, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import PetzCareLogo from '../assets/PetzCareLogo.svg';
import PhoneIcon from '../assets/icons/PhoneIcon.svg';
import EmailIcon from '../assets/icons/EmailIcon.svg';
import LocationIcon from '../assets/icons/LocationIcon.svg';
import SearchIcon from '../assets/icons/SearchIcon.svg';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const menuItems = ['Home', 'About Us', 'Blog', 'Services', 'Pages', 'Contact'];
  
  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar position="fixed" sx={{ 
        background: 'linear-gradient(135deg, #2d5a5a 0%, #1a4040 100%)',
        boxShadow: 'none'
      }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <img src={PetzCareLogo} alt="PetzCare" style={{ height: '40px' }} />
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>Home</Button>
            <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>About Us</Button>
            <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>Blog</Button>
            <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>Services</Button>
            <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>Pages</Button>
            <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>Contact</Button>
          </Box>
          
          {/* Desktop Social Icons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <img src={PhoneIcon} alt="Phone" style={{ width: '30px', height: '30px', cursor: 'pointer' }} onClick={scrollToFooter} />
            <img src={EmailIcon} alt="Email" style={{ width: '30px', height: '30px', cursor: 'pointer' }} onClick={scrollToFooter} />
            <img src={LocationIcon} alt="Location" style={{ width: '30px', height: '30px', cursor: 'pointer' }} onClick={scrollToFooter} />
          </Box>
          
          {/* Mobile Hamburger Menu */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item} onClick={() => setMobileOpen(false)}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;