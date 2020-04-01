import React from 'react';
import { StyledMenu } from './styles';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/#main">Главная</a>
            <a href="/#instruction">Как установить</a>
            <a href="/#features">Возможности</a>
            <a href="/#versions">Версии приложения</a>
        </StyledMenu>
    );
};
export default Menu;
