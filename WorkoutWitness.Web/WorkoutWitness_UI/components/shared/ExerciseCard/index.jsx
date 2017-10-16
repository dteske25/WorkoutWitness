import * as React from 'react';

export default class ExerciseCard extends React.Component {
        makeStat(label, value) {
        if (value) {
            return (<p className={'card-text'}>
                <strong>
                    {`${label}: `}
                </strong>
                {value}
            </p >);
        }
        return '';
    }


    render() {
        const { exercise } = this.props;

        const weight = this.makeStat('Weight', exercise.weight);
        const reps = this.makeStat('Reps', exercise.reps);
        const sets = this.makeStat('Sets', exercise.sets);
        const distance = this.makeStat('Distance', exercise.distance);
        const time = this.makeStat('Time', exercise.time);

        return (<div className={'card'}>
            <div className={'card-block'}>
                <h4 className={'card-title'}>{exercise.name}</h4>
                <h6 className={'card-subtitle mb-2 text-muted'}>Subtitle</h6>
                {weight}
                {reps}
                {sets}
                {distance}
                {time}
            </div>
        </div>);
    }
}