import { generateMedia } from 'styled-media-query';

export const customMedia = generateMedia({
    desktopExtraLarge: '1920px',
    desktopLarge: '1439px',
    desktopSmall: '1250px',
    tablet: '1024px',
    mobile: '768px',
    smallMobile: '500px',
});
