import { useState } from 'react';
import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import ValidationMenu from '../components/ValidationMenu';

function CWT() {
    const algorithmList = ['ES256', 'ED25519'];

    const [algorithm, setAlgorithm] = useState(algorithmList[0]);

    const handleAlgorithmChange = (value) => {
        setAlgorithm(value);
    };

    return <>
        <h1>CWT</h1>

        <RadioButton options={algorithmList} handleRadioChange={handleAlgorithmChange} />
        <br />

        <ValidationMenu signLabel={"Key ID"} verifyLabel={"CWT"} />
        <Button variant="contained" size="large" color="success">SUBMIT</Button>
    </>;
}

export default CWT;
