import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioButton({ options }) {
    return (
        <FormControl>
            <RadioGroup
                row
                name="position"
                defaultValue={options[0]}
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
