import * as React from 'react';

type AddExerciseProps = {
    handleChange: Function;
    handleRefresh: Function;
    handleSubmit: Function;
};

export default class AddExercise extends React.Component<AddExerciseProps, {}> {
    constructor() {
        super();
    }

    public render() {
        return (<div className={'row'}>
            <div>
                <input
                    onInput={(e) => this.props.handleChange(e, 'name')}
                    className={'form-control'}
                    type='text'
                    placeholder={'Name'} />
            </div>
            <div>
                <input
                    onInput={(e) => this.props.handleChange(e, 'weight')}
                    className={'form-control'}
                    type='number'
                    placeholder={'Weight'} />
            </div>
            <div>
                <input
                    onInput={(e) => this.props.handleChange(e, 'reps')}
                    className={'form-control'}
                    type='number'
                    placeholder={'Reps'} />
            </div>
            <div>
                <input
                    onInput={(e) => this.props.handleChange(e, 'sets')}
                    className={'form-control'}
                    type='number'
                    placeholder={'Sets'} />
            </div>
            <div>
                <input
                    onInput={(e) => this.props.handleChange(e, 'distance')}
                    className={'form-control'}
                    type='number'
                    placeholder={'Distance'} />
            </div>
            <div>
                <input
                    onInput={(e) => this.props.handleChange(e, 'time')}
                    className={'form-control'}
                    type='text'
                    placeholder={'Time (HH:MM:SS)'} />
            </div>
            <button
                onClick={() => this.props.handleSubmit()}
                className={'btn btn-primary'}
            >
                Create
                    </button>
            <button
                onClick={() => this.props.handleRefresh()}
                className={'btn btn-default'}
            >
                Refresh
                    </button>
        </div>);
    }

}