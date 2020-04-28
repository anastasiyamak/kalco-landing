import React from 'react';
import { MainTitle } from '../Title/index';
import Text from 'components/text';
import Button from 'components/button';
import { Container, PhoneWrapper } from './styles';
import Logo from './logo/index';

const Main = () => (
    <Container id="main">
        <Logo />
        <MainTitle>
            Приложение для бесплатного просмотра мультимедиа контента
        </MainTitle>
        <Text regular color="whiteOpacity">
            Просматривайте более 15000 сериалов в своем android
            смартфоне/планшете/TV
        </Text>
        <a href="https://firebasestorage.googleapis.com/v0/b/kalco-d7c54.appspot.com/o/app-kalco-release-v0.0.45-vc45.apk?alt=media&token=8efa692e-704e-4a69-ba4d-2febf212ce7b">
            <Button main>скачать .apk</Button>
        </a>
        <PhoneWrapper>
            <img src="./phone_mockup.png" alt="phone" />
            <video playsinline autoPlay muted loop>
                <source src="./video.mp4" type="video/mp4" />
            </video>
        </PhoneWrapper>
    </Container>
);

export default Main;
