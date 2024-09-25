import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext'; // Import useAuthContext
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Dashboard = () => {
  const { logout } = useAuthContext(); // Use useAuthContext
  const navigate = useNavigate(); // Use useNavigate hook

  const handleLogout = () => {
    logout();
    navigate('/'); // Navigate to sign-in page
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4} textAlign="center" borderRadius={10}>
          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: 2,
            }}
          >
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                Welcome to the Dashboard
              </Typography>
              <Button variant="contained" color="primary" onClick={handleLogout}>
                Logout
              </Button>
            </CardContent>
          </Card>
        </Box>
        <Box position="relative" height="300px" overflow="hidden" >
          <motion.div
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: 'white',
              borderRadius: '50%',
              position: 'absolute',
              top: '50%',
              left: '50%',
            }}
            animate={{
              x: [0, 100, 0, -100, 0],
              y: [0, -100, 0, 100, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: 'white',
              borderRadius: '50%',
              position: 'absolute',
              top: '20%',
              left: '20%',
            }}
            animate={{
              x: [0, -50, 0, 50, 0],
              y: [0, 50, 0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;