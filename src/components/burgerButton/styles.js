import styled from 'styled-components';
import { color } from 'constants/theme';
import { customMedia } from 'constants/breakpoints';

export const BurgerWrapper = styled.div`
    display: none;

    ${customMedia.lessThan('tablet')`
        display: block;
    `}
`;
export const Burger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2rem;
    width: 2rem;
    background: transparent;
    border: none;
    padding: 0;
    z-index: 10;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-200%, 140%);

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.2rem;
        background: ${color('white')};
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 0px;

        :first-child {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) =>
                open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }

    ${customMedia.lessThan('smallMobile')`
        transform: translate(-100%, 150%);
    `}
`;
