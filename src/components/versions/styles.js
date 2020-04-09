import styled, { css } from 'styled-components';
import { color } from 'constants/theme';
import { customMedia } from 'constants/breakpoints';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 130px;
`;

export const ImgWrapper = styled.div`
    max-width: 400px;
    
    img{
        width: 100%;
    }
    ${customMedia.lessThan('mobile')`
        display: none;
    `}
`;

export const ListItems = styled.div`
    margin-top: 15px;
`;

export const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${color('orange')};
    position: relative;
    margin: 5px 15px 30px 0;
    ::after {
        content: '';
        position: absolute;
        width: 2px;
        background: rgba(242, 158, 46, 0.5);
        right: 50%;
        transform: translateX(50%);
        height: 50px;
    }
    ${props =>
        props.last &&
        css`
            ::after {
                height: 0;
            }
        `}
`;
