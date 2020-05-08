import React from 'react';
import Flex from 'styled-flex-component';
import { MainTitle, SubTitle } from '../Title/index';
import Text from 'components/text';
import { Container, ImgWrapper, ListItems, Circle } from './styles';

const AppVersions = () => (
    <Container id="versions">
        <div>
            <MainTitle small>Текущая версия приложения</MainTitle>
            <SubTitle color="whiteOpacity">0.0.46</SubTitle>
            <Text regular> новое в приложении: </Text>
            <ListItems>
                <Flex>
                    <Circle first/>
                    <span>
                        Исправлена ошибка при загрузке серий на ТВ
                        устройствах  
                    </span>
                </Flex>
                <Flex>
                    <Circle last />
                    <span>
                        При нажатии кнопки &quot;следующая серия&quot;, по
                        возможности, сохраняется раннее выбранная озвучка
                    </span>
                </Flex>
            </ListItems>
            <Text regular>появится в следующей версии:</Text>
            <ListItems>
                <Flex>
                    <Circle />
                    Коллекция фильмов
                </Flex>
                <Flex>
                    <Circle last />
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
