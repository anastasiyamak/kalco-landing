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
                    <a href="https://firebasestorage.googleapis.com/v0/b/kalco-d7c54.appspot.com/o/app-kalco-release-v0.0.42-vc42.apk?alt=media&token=bcaf3954-db81-4b07-a620-cd0b36eb49b3">
                        <Button>Скачать</Button>
                    </a>
                </li>
            </ul>
        </S.Container>
    );
};

export default Nav;
