import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioButton({ options, handleRadioChange }) {
    const [value, setValue] = React.useState(options[0]);
  
    const handleChange = (event) => {
      setValue(event.target.value);
      handleRadioChange(event.target.value);
    };

    return (
        <FormControl>
            <RadioGroup
                row
                name="position"
                value={value}
                onChange={handleChange}
            >
                {options.map((option) =>
                    <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={option}
                        labelPlacement="bottom"
                    />
                )}
            </RadioGroup>
        </FormControl>
    );
}
