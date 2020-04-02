import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 0 30px;
`;

export const Link = styled.a`
    margin-right: 15px;
    img {
        width: 30px;
        height: 30px;
    }
    ${props =>
        props.instagram &&
        css`
            img {
                width: 28px;
                height: 28px;
            }
        `}
`;

export const Copyright = styled.div`
    text-align: end;
    line-height: 24px;
    font-size: 14px;
`;
