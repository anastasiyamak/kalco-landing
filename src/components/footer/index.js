import React from 'react';
import Flex from 'styled-flex-component';
import { Container, Link, Copyright } from './styles';


const Footer = () => {
    return (
        <Container>
            <Flex>
                <Link href="https://kalco.en.aptoide.com/app" target="blanck">
                    <img src='./aptoide.png' alt="Aptoide" />
                </Link>
                <Link
                    href="https://www.instagram.com/kalcoapp/"
                    target="blanck"
                    instagram
                >
                    <img src='./instagram.svg' alt="Instagram" />
                </Link>
            </Flex>
            <Copyright>
                Copyright © {new Date().getFullYear()} Kalco, Ltd.
                <div>All rights reserved.</div>
            </Copyright>
        </Container>
    );
};

export default Footer;
