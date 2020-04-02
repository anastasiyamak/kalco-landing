import styled from 'styled-components';
import { font } from 'constants/theme';
import { customMedia } from 'constants/breakpoints';

export const Container = styled.nav`
    ul {
        display: flex;
        align-items: center;
        font: ${font('smallText')};
        margin-right: 40px;

        li {
            margin-left: 30px;
        }

        ${customMedia.lessThan('tablet')`
            display: none;
        `}
    }
`;
