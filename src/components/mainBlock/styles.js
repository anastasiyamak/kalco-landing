import styled from 'styled-components';
import { customMedia } from 'constants/breakpoints';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    ${customMedia.lessThan('mobile')`
        width: 90%;
        padding-top: 100px;
    `}
`;

export const PhoneWrapper = styled.div`
    max-width: 35%;
    width: 100%;
    position: relative;

    img {
        max-width: 100%;
    }
    ${customMedia.lessThan('tablet')`
        max-width: 45%;
    `}
    video{
        position: absolute;
        top: 0;
        z-index: -1;
        width: 91%;
        right: 5%;
        transform: translateY(3%);
    }
`;
