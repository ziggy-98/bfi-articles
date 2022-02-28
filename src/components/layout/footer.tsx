import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { logoSrc } from '../logo';

export const Footer = () => {

    return (
      <Box component="footer" sx={{ backgroundColor: "black", py: 6, marginTop: "30px", color: "#fff" }}>
        <Container maxWidth="lg">
        <img className="bfi-logo" src={logoSrc} alt="The BFI logo" />
          <Typography
            variant="subtitle1"
            align="center"
            color="inherit"
            component="p"
          >
            The BFI articles site. For more information, go to <Link color="inherit" href="https://www.bfi.org.uk/">the BFI website.</Link>
          </Typography>
          <Typography variant="body2" color="inherit" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.bfi.org.uk/">
                BFI
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            </Typography>
        </Container>
      </Box>
    );
}