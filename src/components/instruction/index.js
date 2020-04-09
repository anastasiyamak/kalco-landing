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

const Instruction = () => (
    <Container id="instruction">
        <ContainerInner>
            <InstructionBlock>
                <MainTitle small>Инструкция по установке</MainTitle>
                <ListItems>
                    <Text regular>
                        Скачайте apk файл приложения на ваше устройство
                    </Text>
                    <Text regular>
                        тут какой-нибдуь ебланский текст
                    </Text>
                    <Text regular>
                        тут какой-нибдуь ебланский текст
                    </Text>
                </ListItems>
            </InstructionBlock>
            <VideoWrapper>
                <Video videoSrcURL="https://www.youtube.com/embed/NkRkuI0ZgX0" />
            </VideoWrapper>
        </ContainerInner>
    </Container>
);

export default Instruction;
