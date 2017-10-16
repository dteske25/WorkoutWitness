import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class NavMenu extends React.Component {
    render() {
        return (<nav className={'navbar navbar-dark navbar-expand-md bg-dark sticky-top'}>
            <Link className={'navbar-brand'} to={'/'}>WorkoutWitness.Web</Link>
            <button className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className={'navbar-toggler-icon'}></span>
            </button>
            <div className={'collapse navbar-collapse'}>
                <div className={'navbar-nav'}>
                    <NavLink className={'nav-item nav-link'} to={'/'} activeClassName={'active'}>Home</NavLink>
                    <NavLink className={'nav-item nav-link'} to={'/create'} activeClassName={'active'}>New</NavLink>
                </div>
            </div>
        </nav>);
    }
}
