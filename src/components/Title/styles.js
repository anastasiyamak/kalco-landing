import styled, { css } from 'styled-components';
import { font, color } from 'constants/theme';
import { customMedia } from 'constants/breakpoints';

export const MainTitle = styled.h1`
    font: ${font('pageHeading')};
    color: ${props => (props.color ? color(props.color) : color('white'))};
    margin: 40px 0 20px;

    ${customMedia.lessThan('mobile')`
        font-size: 38px;
    `}

    ${props =>
        props.small &&
        css`
            font: ${font('smallPageHeading')};
            margin: 0;

            ${props =>
                props.featuresHeading &&
                css`
                    margin: 40px 0 60px 40px;
                `}

            ${customMedia.lessThan('mobile')`
                    font-size: 34px;
                `}
        `}
`;

export const SubTitle = styled.h2`
    font: ${font('text')};
    color: ${props => (props.color ? color(props.color) : color('white'))};
    margin: 15px 0 20px;
`;
