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
        <a href="https://firebasestorage.googleapis.com/v0/b/kalco-d7c54.appspot.com/o/app-kalco-release-v0.0.42-vc42.apk?alt=media&token=bcaf3954-db81-4b07-a620-cd0b36eb49b3">
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
