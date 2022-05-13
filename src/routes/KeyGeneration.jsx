import { useState } from 'react';
import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";

function KeyGeneration() {
    const algorithmList = ['ES256', 'ED25519'];

    const [algorithm, setAlgorithm] = useState(algorithmList[0]);

    const handleAlgorithmChange = (value) => {
        setAlgorithm(value);
    };

    return <>
        <h1>Key Generation</h1>

        <RadioButton options={algorithmList} handleRadioChange={handleAlgorithmChange} />
        <br />
        
        <Button variant="contained" size="large" color="success">SUBMIT</Button>
    </>;
}

export default KeyGeneration;
