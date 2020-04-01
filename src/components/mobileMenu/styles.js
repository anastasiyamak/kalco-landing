import styled from 'styled-components';
import { color } from 'constants/theme';

export const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${color('black')};
    height: 100vh;
    padding: 0 38px 0 60px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

    a {
        font: 500 12px Roboto, sans-serif;
        text-transform: uppercase;
        text-align: right;
        margin-bottom: 20px;

        & :last-child {
            margin-bottom: 0;
        }
    }
`;
