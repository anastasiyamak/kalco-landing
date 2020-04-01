import React from 'react';
import { BurgerWrapper, Burger } from './styles';

const BurgerButton = ({ open, setOpen }) => {
    return (
        <BurgerWrapper>
            <Burger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </Burger>
        </BurgerWrapper>
    );
};

export default BurgerButton;
