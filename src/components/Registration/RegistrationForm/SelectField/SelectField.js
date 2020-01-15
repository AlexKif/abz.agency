import React, {Component, Fragment} from 'react';
import Select from "react-select";
import {connect} from "react-redux";
import {currentPosition} from "../../../../actions/registrationAction";
class SelectField extends Component {

    state = {
        selectedOption: null,
        isVisited: false
    };

    customStyles = {
        control: _ => {
            return {
                ..._,
                minHeight: '57px',
                paddingLeft: '5px',
                background: 'rgba(255, 255, 255, 0)',
                boxShadow: "none",
                borderColor: "#b7b7b7",
                '&:hover': {
                    borderColor: 'none'
                }

            }
        },
        indicatorsContainer: _ => ({
            ..._,
            display: 'none'
        }),
        option: (_, {isSelected}) => {
            return {
                ..._,
                '&:hover': {
                    background: '#FCE2CC'
                },
                background: 'none',
                color: isSelected ? '#EF6C00':'#000'
            }
        }
    };

    handleChange = selectedOption => {
        const {dispatch} = this.props;
        this.setState({ selectedOption });
        dispatch(currentPosition(selectedOption));
    };

    renderOptions = () => {
        const {positions} = this.props;
        let options = [];
        positions && positions.forEach(position => {
            options.push({value: position.id, label: position.name})
        });
        return options
    };

    render() {
        const { selectedOption } = this.state;
        return (
            <Fragment>
                <Select options={this.renderOptions()}
                        styles={this.customStyles}
                        value={selectedOption}
                        isSearchable={false}
                        placeholder="Select your position"
                        autoFocusOption={false}
                        onChange={this.handleChange}/>
                <span className="registration-form__item-custom-appearance">
                    <img src="/images/caret-down.svg" alt="custom-appearance"/>
                </span>
                <input
                    readOnly={true}
                    value={selectedOption && selectedOption.label ? selectedOption.label: ''}
                    required={true}
                    className="additional-input"
                />
            </Fragment>
        );
    }
}

export default connect()(SelectField);