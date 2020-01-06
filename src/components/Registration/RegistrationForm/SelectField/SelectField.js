import React, {Component} from 'react';
import Select from "react-select";
import {connect} from "react-redux";
import {currentPosition} from "../../../../actions/registrationAction";

class SelectField extends Component {

    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        const {dispatch} = this.props;
        this.setState({ selectedOption });
        dispatch(currentPosition(selectedOption));
        console.log(`Option selected:`, selectedOption);
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
            <Select options = {this.renderOptions()} value={selectedOption} onChange={this.handleChange}/>
        );
    }
}

export default connect()(SelectField);