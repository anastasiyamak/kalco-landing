import styled from 'styled-components';
import { color, font } from 'constants/theme';
import { customMedia } from 'constants/breakpoints';

export const Container = styled.header`
    background-color: ${color('blackOpacity')};
    height: 75px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.h1`
    font: ${font('logo')};
    margin-left: 40px;

    ${customMedia.lessThan('smallMobile')`
        margin-left: 20px;
    `}
`;

export const ButtonWrapper = styled.a`
    display: none;

    ${customMedia.lessThan('tablet')`
        display: block;
    `}
`;
