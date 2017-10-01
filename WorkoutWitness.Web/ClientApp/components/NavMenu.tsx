import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className='navbar navbar-dark navbar-expand-md bg-dark sticky-top'>
            <Link className='navbar-brand' to={ '/' }>WorkoutWitness.Web</Link>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse'>
                <div className='navbar-nav'>
                    <NavLink exact to={ '/' } className='nav-item nav-link' activeClassName='active'>Home</NavLink>
                    <NavLink className='nav-item nav-link' to={ '/workouts' }  activeClassName='active'>Workouts</NavLink>
                    <NavLink className='nav-item nav-link' to={ '/counter' } activeClassName='active'>Counter</NavLink>
                    <NavLink className='nav-item nav-link' to={ '/fetchdata' } activeClassName='active'>Weather</NavLink>
                </div>
            </div>
        </nav>;
    }
}
