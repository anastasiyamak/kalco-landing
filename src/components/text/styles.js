import styled, { css } from 'styled-components';
import { font, color } from 'constants/theme';
import { customMedia } from 'constants/breakpoints';

export const Container = styled.p`  
    ${props =>
        props.regular &&
        css`
            font: ${font('text')};
            line-height: 29px;
            color: ${props =>
                props.color ? color(props.color) : color('white')};

            ${customMedia.lessThan('mobile')`
                font-size: 18px;
            `}
        `}

    ${props =>
        props.small &&
        css`
            font: ${font('smallText')};
            color: ${props =>
                props.color ? color(props.color) : color('white')};
            line-height: 1.8rem;
        `} 
`;
