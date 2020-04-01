/* eslint-disable prettier/prettier */
import React from 'react';
import { MainTitle } from 'components/title';
import Text from 'components/text';
import Button from 'components/button';
import { Container, PhoneWrapper } from './styles';
import Logo from 'components/logo';
import Phone from './image.js';

const Main = () => (
    <Container id="main">
        <Logo />
        <MainTitle>
            Приложение для бесплатного просмотра мультимедиа контента
        </MainTitle>
        <Text small color="whiteOpacity">
            Просматривайте более 15000 сериалов в своем android
            смартфоне/планшете
        </Text>
        <Button main>скачать .apk</Button>
        <PhoneWrapper>
            <Phone />
        </PhoneWrapper>
    </Container>
);

export default Main;
