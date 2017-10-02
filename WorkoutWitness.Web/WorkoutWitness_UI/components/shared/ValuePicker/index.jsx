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
        const { type, placeholder } = this.props;
        return (<div className={'value-picker__container'}>
            <button
                className={'value-picker__button'}
                onClick={() => this.handleDecrementButton()}
            >
                -
            </button>
            <input
                className={'value-picker__input'}
                type={type}
                placeholder={placeholder}
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
