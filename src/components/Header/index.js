import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Nav from './Nav/index';
import { Container, Logo, ButtonWrapper } from './styles';
import BurgerButton from 'components/burgerButton';
import MobileMenu from 'components/mobileMenu';
import Button from 'components/button';
import { Url } from 'constants/urls'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Link to="/">
                <Logo>Kalco</Logo>
            </Link>
            <Nav />
            <ButtonWrapper href={Url}>
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
