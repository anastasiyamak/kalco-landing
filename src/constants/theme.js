/* eslint-disable prettier/prettier */
import get from 'lodash/get';

export const theme = {
    colors: {
        orange: '#F29E2E',
        white: '#fff',
        whiteOpacity: 'rgba(255, 255, 255, 0.8)',
        black: '#090909',
        blackOpacity: 'rgba(0,0,0,.75)',
        lightGrey: '#61605c',
        darkGrey: '#2c3030',
        green: '#145749',
        purple: '#4e1b47',
    },
    fonts: {
        logo: '700 40px MontserratBold, sans-serif',
        pageHeading: '700 48px MontserratBold, sans-serif;',
        smallPageHeading: '700 42px MontserratBold, sans-serif;',
        text: '300 26px Rubik, sans-serif;',
        smallText: '300 22px Rubik, sans-serif;',
        microText: '300 16px Rubik, sans-serif;',
    },
    easing: {
        in: 'cubic-bezier(.51,-0.21,.39,1.46)',
        out: 'cubic-bezier(.68,-0.5,.56,1.23)',
    },
};

export function themeVar(path) {
    return () => get(theme, path);
}

export function font(fontKey) {
    return themeVar(`fonts.${fontKey}`);
}

export function color(colorKey) {
    return themeVar(`colors.${colorKey}`);
}

export function easing(key) {
    return themeVar(`easing.${key}`);
}
