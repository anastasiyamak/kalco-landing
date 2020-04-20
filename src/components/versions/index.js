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
                    Оптимизация приложения под Android TV
                </Flex>
                <Flex>
                    <Circle last/>
                    <span>Уведомления о выходе новых серий избранных сериалов</span>
                </Flex>
            </ListItems>
            <Text regular>появится в следующей версии:</Text>
            <ListItems>
                <Flex>
                    <Circle />
                    Коллекция фильмов
                </Flex>
                <Flex>
                    <Circle last/>
                    Скачивание и оффлайн просмотр
                </Flex>
            </ListItems>
        </div>
        <ImgWrapper>
            <img src="./screen.png" alt="screen" />
        </ImgWrapper>
    </Container>
);

export default AppVersions;
