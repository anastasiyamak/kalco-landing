import React from 'react';
import { Link } from 'gatsby';
import * as S from './styles';
import Button from 'components/button';
import {Url} from 'constants/urls';

const Nav = () => {
    return (
        <S.Container>
            <ul>
                <li>
                    <Link to="/#main" replace>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link to="/#instruction">Как установить</Link>
                </li>
                <li>
                    <Link to="/#features">Возможности</Link>
                </li>
                <li>
                    <Link to="/#versions">Версии приложения</Link>
                </li>
                <li>
                    <a href={Url}>
                        <Button>Скачать</Button>
                    </a>
                </li>
            </ul>
        </S.Container>
    );
};

export default Nav;
