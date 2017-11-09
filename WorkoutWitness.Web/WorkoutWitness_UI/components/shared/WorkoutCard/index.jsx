import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default class WorkoutCard extends React.Component {
    render() {
        const { workout, deleteFunction } = this.props;
        return (<div className={'card'}>
            <div className={'card-block'}>
                <h4 className={'card-title'}>{workout.name}</h4>
                <h6 className={'card-subtitle mb-2 text-muted'}>{`${workout.date.getMonth() + 1}/${workout.date.getDate()}/${workout.date.getFullYear()}`}</h6>
                
                <Link to={`/workout/${workout.id}`} className={'btn btn-primary card-link'}>View</Link>
                <button className={'btn btn-danger card-link'} onClick={deleteFunction}>Delete</button>
            </div>
        </div>);
    }
}