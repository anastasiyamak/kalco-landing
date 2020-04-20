import styled from 'styled-components';
import { customMedia } from 'constants/breakpoints';

export const Container = styled.div`
    height: 100vh;
    padding-top: 40px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${customMedia.lessThan('tablet')`
        height: auto;
    `}
`;

export const ContainerInner = styled.div`
    display: flex;
    justify-content: space-between;

    ${customMedia.lessThan('tablet')`
        flex-direction: column;
    `}
`;

export const ListItems = styled.div`
    margin-top: 30px;
    width: 80%;
    span {
        margin-bottom: 15px;
    }
    :last-child {
        margin-bottom: 0;
    }
    ${customMedia.lessThan('desktopSmall')`
        width: 96%;
    `}
`;
export const InstructionBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;

    ${customMedia.lessThan('tablet')`
        width: 100%;
        margin-top: 90px;
        margin-bottom: 40px;
    `}
    ${customMedia.lessThan('mobile')`
        margin-top: 60px;
    `}
`;
export const VideoWrapper = styled.div`
    width: 55%;

    ${customMedia.lessThan('tablet')`
        width: 100%;
    `}
`;
