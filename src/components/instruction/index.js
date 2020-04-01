/* eslint-disable prettier/prettier */
import React from 'react';
import { MainTitle } from 'components/title';
import Text from 'components/text';
import {
    Container,
    ContainerInner,
    ListItems,
    InstructionBlock,
    VideoWrapper,
} from './styles';
import Video from './video';
import Flex from 'styled-flex-component';

const Instruction = () => (
    <Container id="instruction">
        <ContainerInner>
            <InstructionBlock>
                <MainTitle small>Инструкция по установке</MainTitle>
                <ListItems>
                    <Text small>
                        Скачайте apk файл приложения на ваше устройство
                    </Text>
                    <Text small>тут какой-нибдуь ебланский текст</Text>
                    <Text small>тут какой-нибдуь ебланский текст</Text>
                </ListItems>
            </InstructionBlock>
            <VideoWrapper>
                <Video
                    videoSrcURL="https://www.youtube.com/embed/NkRkuI0ZgX0"
                    videoTitle="Official Music Video on YouTube"
                />
            </VideoWrapper>
        </ContainerInner>
    </Container>
);

export default Instruction;
