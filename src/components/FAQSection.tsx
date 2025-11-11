import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import logo2 from '../assets/images/logo2.png';
import PawBackground from '../assets/PawBackground.svg';

const faqs = [
  {
    question: "How long will it take to come out the same day your animal?",
    answer: "For the same day, we offer emergency services. We have the capability to handle and accommodate these for the best results. Same-day they can become urgent, so it is important to call us as soon as possible."
  },
  {
    question: "Do I have to call when I want to bring my pet?",
    answer: "While walk-ins are welcome for minor issues, we highly recommend scheduling an appointment to ensure your pet receives the best care and to minimize waiting time."
  },
  {
    question: "Will you get pet to rest during the day?",
    answer: "Yes, we provide comfortable resting areas and recovery spaces for pets who need to stay for treatments or observation during the day."
  },
  {
    question: "Can pets stay overnight/what about early care?",
    answer: "We offer overnight care for pets requiring extended monitoring or treatment. Our facility is equipped with proper overnight supervision and early morning care."
  },
  {
    question: "Will you call me after my pet goes during the day?",
    answer: "Absolutely! We maintain regular communication with pet owners throughout the day and will call you with updates on your pet's condition and treatment progress."
  }
];

const FAQSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center', 
        gap: { xs: 4, md: 6 }
      }}>
        {/* Pet Image */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img 
            src={logo2} 
            alt="Pet" 
            style={{ 
              width: '100%', 
              maxWidth: '400px',
              height: 'auto'
            }} 
          />
        </Box>

        {/* FAQ Content */}
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
              Frequently Asked Questions
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ 
            mb: 4, 
            color: 'text.secondary', 
            lineHeight: 1.6,
            fontSize: { xs: '14px', md: '16px' }
          }}>
            Get answers about our services. We're here to help with any questions you might have about pet care, appointments, treatments, and more. Contact us if you need additional information.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {faqs.map((faq, index) => (
              <Accordion 
                key={index}
                sx={{ 
                  backgroundColor: index === 0 ? '#2d5a5a' : '#ffd700',
                  color: index === 0 ? 'white' : 'black',
                  '&:before': { display: 'none' },
                  boxShadow: 'none',
                  borderRadius: '4px !important'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: index === 0 ? 'white' : 'black' }} />}
                  sx={{ 
                    fontWeight: 'bold',
                    fontSize: { xs: '14px', md: '16px' }
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FAQSection;