import styled from 'styled-components';
import { color } from 'constants/theme';
import { customMedia } from 'constants/breakpoints';

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${customMedia.lessThan('mobile')`
        height: auto;
        padding-top: 60px;
    `}

    .features-blocks {
        ${customMedia.lessThan('mobile')`
            flex-direction: column;
        `}
    }
`;

export const FeatureBlock = styled.div`
    flex: 1;
    border-radius: 10px;
    background: ${props => (props.color ? color(props.color) : color('white'))};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px;
    margin-right: 20px;

    :last-child {
        margin-right: 0;
    }

    img {
        width: 60px;
        margin-bottom: 30px;
    }

    ${customMedia.lessThan('desktopSmall')`
        padding: 20px;
    `}

    ${customMedia.lessThan('mobile')`
        width: 50%;
        margin: 0 auto 30px;

        :last-child{
            margin: 0 auto;
        }
    `}
`;
