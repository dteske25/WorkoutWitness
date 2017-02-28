import React, { Component } from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';
import Dialog from 'react-toolbox/lib/dialog';
import { Field, reduxForm } from 'redux-form';

const exerciseTypes = [
  {
    "value": 0,
    "label": "Custom"
  },
  {
    "value": 1,
    "label": "Weightlifting"
  },
  {
    "value": 2,
    "label": "Running"
  },
  {
    "value": 3,
    "label": "Swimming"
  }
];

class AddWorkoutForm extends Component {
    render() {
        const { handleSave, handleClose, active } = this.props;
        const actions = [
            { label: "Cancel", onClick: () => handleClose() },
            { label: "Save", onClick: () => handleSave() }
        ];

        /*const titleInput = (<Input 
                    type='text'
                    label='name'
                    value={this.state.name}
                    onChange={this.handleChange.bind(this, 'name')}
                    maxLength={24}
                />);

        const exerciseTypeDropdown = (
            <Dropdown
                    auto
                    source={exerciseTypes}
                    onChange={this.handleChange.bind(this, 'exerciseType')}
                    value={this.state.exercises[0].exerciseType}
                />
        );*/

        const renderField = ({ input, label, type, icon, meta: { touched, error } }) => (
            <div>
                <Input {...input} label={label} type={type} icon={icon} error={touched ? error : ''} />
            </div>
        );

        return(
            <Dialog
                title='Add Workout'
                actions={actions}
                active={active}
                onEscKeyDown={handleClose}
                onOverlayClick={handleClose}
            >
                <form onSubmit={handleSave}>
                    <div>
                        <Field name='email' component={renderField}
                            type='email'
                            label='Email address' required
                            icon='email' />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <div>
                        <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div>
                        <label>Email</label>
                        <div>
                        <Field name="email" component="input" type="email" placeholder="Email"/>
                        </div>
                    </div>
                </form>
            </Dialog>
        )
    }
}

AddWorkoutForm = reduxForm({
    form: 'addWorkout'
})(AddWorkoutForm);

export default AddWorkoutForm;