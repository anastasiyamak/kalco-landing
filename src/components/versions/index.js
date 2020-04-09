import React from 'react';
import Flex from 'styled-flex-component';
import { MainTitle, SubTitle } from '../Title/index';
import Text from 'components/text';
import { Container, ImgWrapper, ListItems, Circle } from './styles';

const AppVersions = () => (
    <Container id="versions">
        <div>
            <MainTitle small>Текущая версия приложения</MainTitle>
            <SubTitle color="whiteOpacity">V.0.15</SubTitle>
            <Text regular> новое в приложении: </Text>
            <ListItems>
                <Flex>
                    <Circle />
                    Скачивание и оффлайн просмотр
                </Flex>
                <Flex>
                    <Circle />
                    Оптимизация приложения для AndroidTv
                </Flex>
                <Flex>
                    <Circle last />
                    Коллекция фильмов
                </Flex>
            </ListItems>
            <Text regular>появится в следующей версии:</Text>
            <ListItems>
                <Flex>
                    <Circle />
                    Скачивание и оффлайн просмотр
                </Flex>
                <Flex>
                    <Circle />
                    Оптимизация приложения для AndroidTv
                </Flex>
                <Flex>
                    <Circle last />
                    Коллекция фильмов
                </Flex>
            </ListItems>
        </div>
        <ImgWrapper>
            <img src="./screen.png" alt="screen" />
        </ImgWrapper>
    </Container>
);

export default AppVersions;
