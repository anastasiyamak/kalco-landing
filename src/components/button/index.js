import React from 'react';
import PropTypes from 'prop-types';
import ButtonWrapper from './styles';
import useFirebase from '../useFirebase';

export default function Button({
    children,
    type,
    disabled,
    onClick,
    ...restProps
}) {

 const firebase = useFirebase();

    function onDownloadButtonClick() {
        console.log('downloadbutton clicked');
        if (!firebase) return;
        firebase.analytics().logEvent('download_button_clicked');
    }
    

    function handleClick(e) {
        e.target.blur();
        onDownloadButtonClick();
        onClick();
    }

    return (
        <ButtonWrapper
            type={type}
            disabled={disabled}
            onClick={handleClick}
            {...restProps}
        >
            {children}
        </ButtonWrapper>
    );
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array,
    ]).isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    type: 'button',
    disabled: false,
    onClick: () => {},
};
