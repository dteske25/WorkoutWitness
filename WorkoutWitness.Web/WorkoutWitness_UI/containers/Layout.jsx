import * as PropTypes from 'prop-types';
import * as React from 'react';
import NavMenu from './NavMenu';

export default class Layout extends React.Component {
    render() {
        return (<div>
            <NavMenu />
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>);
    }
}
