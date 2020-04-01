import styled, { css } from 'styled-components';
import { color, font } from 'constants/theme';
import { customMedia } from 'constants/breakpoints';

export default styled.button`
    cursor: pointer;
    padding: 7px 30px;
    color: ${color('white')};
    background: ${color('orange')};
    border: none;
    border-radius: 4px;
    font: ${font('microText')};
    font-weight: 700;
    line-height: 29px;
    outline: none;
    width: fit-content;

    ${props =>
        props.main &&
        css`
            font: 22px Rubik, sans-serif;
            padding: 15px 35px;
            margin: 20px 0 30px;
        `}
    ${props =>
        props.mobile &&
        css`
            display: none;
            position: absolute;
            z-index: 10;
            margin: 0;
            right: 0;
            transform: translateX(-65%);

            ${customMedia.lessThan('tablet')`
                display: block;
            `}
            ${customMedia.lessThan('smallMobile')`
                transform: translateX(-50%);
            `}
        `}
`;
