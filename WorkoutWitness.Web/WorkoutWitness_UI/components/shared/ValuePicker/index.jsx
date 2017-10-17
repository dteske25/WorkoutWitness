import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class ValuePicker extends React.Component {
    handleInput(e) {
        const { label, onChangeFunction } = this.props;
        onChangeFunction(label.toLowerCase(), e.currentTarget.value);
    }

    render() {
        const { label, className, value, onChangeFunction, incrementBy } = this.props;
        return (<div className={`value-picker__container ${className}`}>
            <button
                className={'value-picker__button'}
                onClick={() => onChangeFunction(label.toLowerCase(), value - incrementBy)}
            >
                -
            </button>
            <span className={'value-picker__input-label text-center'}>
                {`${label}:`}
            </span>
            <input
                type='number'
                className={'value-picker__input text-center'}
                onChange={this.handleInput.bind(this)}
                value={value}
            />
            <button
                className={'value-picker__button'}
                onClick={() => onChangeFunction(label.toLowerCase(), value + incrementBy)}
            >
                +
            </button>
        </div>);
    }
}

ValuePicker.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    incrementBy: PropTypes.number,
};
