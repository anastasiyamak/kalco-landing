import React from 'react';
import { Link } from 'gatsby';
import * as S from './styles';
import Button from 'components/button';

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
                    <a href="https://firebasestorage.googleapis.com/v0/b/kalco-d7c54.appspot.com/o/app-kalco-release-v0.0.45-vc45.apk?alt=media&token=8efa692e-704e-4a69-ba4d-2febf212ce7b">
                        <Button>Скачать</Button>
                    </a>
                </li>
            </ul>
        </S.Container>
    );
};

export default Nav;
