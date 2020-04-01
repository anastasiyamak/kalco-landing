/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { font, color } from 'constants/theme';
import { customMedia } from 'constants/breakpoints';

export const Container = styled.span`
    ${props =>
        props.regular && //not used
        css`
            font: ${font('text')};
            max-width: 660px;
        `}
       
    ${props =>
        props.small &&
        css`
            font: ${font('smallText')};
            line-height: 29px;
            color: ${props =>
                props.color ? color(props.color) : color('white')};

            ${customMedia.lessThan('mobile')`
                font-size: 20px;
            `}
        `}

    ${props =>
        props.micro &&
        css`
            font: ${font('microText')};
            color: ${props =>
                props.color ? color(props.color) : color('white')};
            line-height: 1.8rem;
        `}       
`;
