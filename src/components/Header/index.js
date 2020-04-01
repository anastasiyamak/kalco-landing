/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Nav from 'components/header/nav';
import { Container, Logo } from './styles';
import BurgerButton from 'components/burgerButton';
import MobileMenu from 'components/mobileMenu';
import Button from 'components/button';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Link to="/">
                <Logo>Kalco</Logo>
            </Link>
            <Nav />
            <Button mobile>Скачать</Button>
            <BurgerButton open={open} setOpen={setOpen} />
            <MobileMenu open={open} setOpen={setOpen} />
        </Container>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
