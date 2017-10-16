import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class ValuePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    clear() {
        this.setState({ value: 0 });
    }

    getValue() {
        const { value } = this.state;
        return value;
    }

    setValue(startValue) {
        this.setState({
            value: Number(startValue)
        });
        console.log(this.state);
    }

    handleInput(e) {
        this.setState({
            value: Number(e.currentTarget.value)
        });
    }

    handleIncrementButton() {
        const { value } = this.state;
        const { incrementBy } = this.props;
        this.setState({
            value: value + incrementBy
        });
    }

    handleDecrementButton() {
        const { value } = this.state;
        const { incrementBy } = this.props;
        this.setState({
            value: value - incrementBy
        });
    }

    render() {
        const { type, label, className } = this.props;
        return (<div className={`value-picker__container ${className}`}>
            <button
                className={'value-picker__button'}
                onClick={() => this.handleDecrementButton()}
            >
                -
            </button>
            <span className={'value-picker__input-label text-center'}>
                {`${label}:`}
            </span>
            <input
                type={type}
                className={'value-picker__input text-center'}
                onChange={this.handleInput.bind(this)}
                value={this.state.value}
            />
            <button
                className={'value-picker__button'}
                onClick={() => this.handleIncrementButton()}
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
