import React from "react";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";

class VehicleOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // default_options: this.props.options
        }
    }

    render() {
        const options = this.props.options;
        const disabled = this.props.disabled;
        const text = this.props.make_model_year;

        return (
            <>
                <Select
                    options={options}
                    onChange={(value) => this.props.onChange(value)}
                    labelField="value"
                    valueField="value"
                    searchBy="value"
                    disabled={disabled}
                    placeholder={text + "..."}
                    closeOnSelect
                />
            </>
        );
    }

}

export default VehicleOptions;
