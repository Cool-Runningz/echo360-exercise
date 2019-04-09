import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends Component {

    render() {
        const { options, onRadioChange, radioValue } = this.props;
        
        return (
        <>
            <form>
                {options.map((item) =>
                <label key={item.label}>
                    {item.label}
                    <input type="radio" name="radioGroup" value={item.value} 
                    onChange={onRadioChange} />  <br />
                </label>
            )}
            </form>
            <pre>
                Value: { radioValue }
            </pre>
        </>
        );
    }
}

RadioGroup.propTypes = {
   options: PropTypes.array.isRequired,
   onRadioChange: PropTypes.func,
   radioValue: PropTypes.string
};

export default RadioGroup;