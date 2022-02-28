import * as React from 'react';
import Container from '@mui/material/Container';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }:LayoutProps) => {
    return (
        <>
                        <Header />
                        <Container maxWidth="lg">
            {children}
        </Container>
                        <Footer />
        </>
    )
}