/* eslint-disable prettier/prettier */
import React from 'react';
import Flex from 'styled-flex-component';
import { MainTitle } from 'components/title';
import Text from 'components/text';
import { Container, FeatureBlock } from './styles';

const AppFeatures = () => (
    <Container id="features">
        <MainTitle small featuresHeading>
            Возможности приложения
        </MainTitle>
        <Flex justifyBetween className="features-blocks">
            <FeatureBlock color="lightGrey">
                <img src="./audio.svg" alt="img" />
                <Text micro color="opacityWhite">
                    Просмотр сериалов в разных озвучках
                </Text>
            </FeatureBlock>
            <FeatureBlock color="darkGrey">
                <img src="./notification.svg" alt="img" />
                <Text micro color="opacityWhite">
                    Уведомление о выходе новых серий избранных сериалов
                </Text>
            </FeatureBlock>
            <FeatureBlock color="green">
                <img src="./clock.svg" alt="img" />
                <Text micro color="opacityWhite">
                    Возможность продолжить просмотр с момента на котором
                    остановились
                </Text>
            </FeatureBlock>
            <FeatureBlock color="purple">
                <img src="./tv.svg" alt="img" />
                <Text micro color="opacityWhite">
                    Просмотр m3u iptv плейлистов
                </Text>
            </FeatureBlock>
        </Flex>
    </Container>
);

export default AppFeatures;
