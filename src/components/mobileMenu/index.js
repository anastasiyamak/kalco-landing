import React from 'react';
import { StyledMenu } from './styles';

const Menu = ({ open, setOpen }) => {
    return (
        <StyledMenu open={open}>
            <a href="/#main" onClick={() => setOpen(!open)}>
                Главная
            </a>
            <a href="/#instruction" onClick={() => setOpen(!open)}>
                Как установить
            </a>
            <a href="/#features" onClick={() => setOpen(!open)}>
                Возможности
            </a>
            <a href="/#versions" onClick={() => setOpen(!open)}>
                Версии приложения
            </a>
        </StyledMenu>
    );
};
export default Menu;
