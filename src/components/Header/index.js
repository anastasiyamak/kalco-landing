/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Nav from './Nav/index';
import { Container, Logo, ButtonWrapper } from './styles';
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
            <ButtonWrapper href="https://firebasestorage.googleapis.com/v0/b/kalco-d7c54.appspot.com/o/app-kalco-release-v0.0.45-vc45.apk?alt=media&token=8efa692e-704e-4a69-ba4d-2febf212ce7b">
                <Button mobile>Скачать</Button>
            </ButtonWrapper>
            <BurgerButton open={open} setOpen={setOpen} />
            <MobileMenu open={open} setOpen={setOpen} />
        </Container>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
