import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import * as ExerciseStore from '../../store/ExerciseStore';
import AddExercise from './AddExercise';

// At runtime, Redux will merge together...
type ExerciseListProps =
    ExerciseStore.ExerciseState
    & typeof ExerciseStore.actionCreators
    & RouteComponentProps<{ workoutId: string }>;

type NewExerciseState = {
    name: string,
    weight?: number,
    reps?: number,
    sets?: number,
    distance?: number,
    time?: TimeRanges,
};

class Workout extends React.Component<ExerciseListProps, NewExerciseState> {
    constructor() {
        super();
        this.state = {
            name: '',
            weight: undefined,
            reps: undefined,
            sets: undefined,
            distance: undefined,
            time: undefined,
        };
    }

    componentWillMount() {
        // This method runs when the component is first added to the page
        let workoutId = this.props.match.params.workoutId;
        this.props.requestExercises(workoutId);
    }

    componentWillReceiveProps(nextProps: ExerciseListProps) {
        // This method runs when incoming props (e.g., route params) change
        //let workoutId = nextProps.match.params.workoutId;
        //this.props.requestExercises(workoutId);
    }

    handleSubmit() {
        const { name, weight, reps, sets, distance } = this.state;
        const workoutId = this.props.match.params.workoutId;
        const exercise: ExerciseStore.Exercise = {
            id: '',
            name,
            weight,
            reps,
            sets,
            distance,
            time: undefined,
        };
        this.props.addExercise(workoutId, exercise);
        this.setState({
            name: '',
            weight: undefined,
            reps: undefined,
            sets: undefined,
            distance: undefined,
            time: undefined,
        });
    }

    onChange(e: React.FormEvent<HTMLInputElement>, elementName: string): void {
        console.log('called it');
        switch (elementName) {
            case 'name':
                this.setState({ name: e.currentTarget.value });
                break;
            case 'weight':
                this.setState({ weight: Number(e.currentTarget.value) });
                break;
            case 'reps':
                this.setState({ reps: Number(e.currentTarget.value) });
                break;
            case 'sets':
                this.setState({ sets: Number(e.currentTarget.value) });
                break;
            case 'distance':
                this.setState({ distance: Number(e.currentTarget.value) });
                break;
        }
    }

    public render() {
        const workoutId = this.props.match.params.workoutId;
        const exerciseList = this.props.exercises.map(e => {

            const weight = e.weight ? <p className={'card-text'}>Weight: {e.weight}</p> : '';
            const reps = e.reps ? <p className={'card-text'}>Reps: {e.reps}</p> : '';
            const sets = e.sets ? <p className={'card-text'}>Sets: {e.sets}</p> : '';
            return (<div className={'card'} key={e.id}>
                <div className={'card-body'}>
                    <h4 className={'card-title'}>{e.name}</h4>
                    {weight}
                    {reps}
                    {sets}
                </div>
                <div className={'card-footer'}>
                    <a href="#" className={'card-link'}>Edit</a>
                    <a href="#" className={'card-link'}>Delete</a>
                </div>
            </div>);
        })

        return (<div>
            <AddExercise
                handleChange={this.onChange.bind(this)}
                handleRefresh={this.props.requestExercises.bind(this, workoutId)}
                handleSubmit={this.handleSubmit.bind(this)}
            />
            <div className={'row'}>
                {exerciseList}
            </div>
        </div>);
    }
}

export default connect(
    (state: ApplicationState) => state.exercises, // Selects which state properties are merged into the component's props
    ExerciseStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Workout) as typeof Workout;
