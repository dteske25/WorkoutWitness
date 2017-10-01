import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import * as WorkoutStore from '../../store/WorkoutStore';

// At runtime, Redux will merge together...
type WorkoutListProps =
    WorkoutStore.WorkoutListState
    & typeof WorkoutStore.actionCreators
    & RouteComponentProps<{}>;

type WorkoutListState = {
    workoutName: string,
    workoutDate: Date
};

class Workouts extends React.Component<WorkoutListProps, WorkoutListState> {
    constructor() {
        super();
        this.state = {
            'workoutName': '',
            'workoutDate': new Date()
        };
    }

    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestWorkouts();
    }

    onChange(event: React.FormEvent<HTMLInputElement>, elementName: string): void {
        switch (elementName) {
            case 'workoutName':
                this.setState({ 'workoutName': event.currentTarget.value });
                break;
            case 'workoutDate':
                const date = new Date(event.currentTarget.value);
                this.setState({ 'workoutDate': date });
                break;
        }
    }

    handleSubmit() {
        const { workoutName, workoutDate } = this.state;
        this.props.addWorkout(workoutName, workoutDate);
        this.setState({
            'workoutName': '',
            'workoutDate': new Date()
        });
        this.props.requestWorkouts();
    }

    public render() {
        const workoutList = this.props.workouts.map(w => {
            return <div key={w.id}>
                <h3 className={'row'}>
                    <Link to={`/workouts/${w.id}`}>
                        {w.name}
                    </Link>
                </h3>
                <p className={'row'}>{w.userId} - {w.date}</p>
            </div>
        });

        return <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col-md-5 col-xs-6'}>
                    <input
                        id={'workout-name'}
                        onInput={(e) => this.onChange(e, 'workoutName')}
                        value={this.state.workoutName}
                        className={'form-control'}
                        type='text'
                        placeholder={'Name'} />
                </div>
                <div className={'col-md-5 col-xs-6'}>
                    <input
                        id={'workout-date'}
                        onInput={(e) => this.onChange(e, 'workoutDate')}
                        className={'form-control'}
                        type='date'
                        placeholder={'Date'} />
                </div>
                <div className={'col-md-2 col-xs-6'}>
                    <button
                        onClick={() => this.handleSubmit()}
                        className={'btn btn-primary'}
                    >
                        Create
                    </button>
                    <button
                        onClick={() => this.props.requestWorkouts()}
                        className={'btn btn-default'}
                    >
                        Refresh
                    </button>
                </div>
            </div>
            {workoutList}
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.workouts, // Selects which state properties are merged into the component's props
    WorkoutStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Workouts) as typeof Workouts;
