import React from 'react';
import { MainTitle } from '../Title/index';
import Text from 'components/text';
import {
    Container,
    ContainerInner,
    ListItems,
    InstructionBlock,
    VideoWrapper,
} from './styles';
import Video from './video';

const Instruction = () => (
    <Container id="instruction">
        <ContainerInner>
            <InstructionBlock>
                <MainTitle small>Инструкция по установке</MainTitle>
                <ListItems>
                    <Text regular>
                        Скачайте .apk файл приложения на ваше устройство
                    </Text>
                    <Text regular>
                        Pазрешите браузеру установку из ненадежных источников
                    </Text>
                    <Text regular>Установите .apk файл</Text>
                </ListItems>
            </InstructionBlock>
            <VideoWrapper>
                <Video videoSrcURL="https://www.youtube.com/embed/eLewoenyDbY" />
            </VideoWrapper>
        </ContainerInner>
    </Container>
);

export default Instruction;
