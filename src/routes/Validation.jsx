import { useState } from 'react';
import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import ValidationMenu from '../components/ValidationMenu';

function Validation() {
    const algorithmList = ['RSA', 'ED25519'];

    const [algorithm, setAlgorithm] = useState(algorithmList[0]);

    const handleAlgorithmChange = (value) => {
        setAlgorithm(value);
    };

    return <>
        <h1>Validation</h1>

        <RadioButton options={algorithmList} handleRadioChange={handleAlgorithmChange} />
        <br />

        <ValidationMenu signLabel={"Text"} verifyLabel={"Signature"} />
        <Button variant="contained" size="large" color="success">SUBMIT</Button>
    </>;
}

export default Validation;
