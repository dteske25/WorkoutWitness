import * as React from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div>
            <NavMenu />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        { this.props.children }
                    </div>
                </div>
            </div>
        </div>;
    }
}
