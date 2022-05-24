import { useState } from 'react';
import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import API from '../services/API.js';

function KeyGeneration() {
    const [privateKey, setPrivateKey] = useState();
    const [publicKey, setPublicKey] = useState();

    const algorithmList = ['ED25519', 'Curve25519', 'RSA', 'ECDSA'];

    const [algorithm, setAlgorithm] = useState(algorithmList[0]);

    const handleAlgorithmChange = value => setAlgorithm(value);

    const handleClick = async () => {
        const { encodedPriKey, encodedPubKey } = await API.genKey(algorithm);
        setPrivateKey(encodedPriKey);
        setPublicKey(encodedPubKey);
    }

    return <>
        <h1>Key Generation</h1>

        <RadioButton options={algorithmList} handleRadioChange={handleAlgorithmChange} />
        <br />

        <Button variant="contained" size="large" color="success" onClick={handleClick}>SUBMIT</Button>

        {privateKey && <p> Private Key : {privateKey}</p>}
        {publicKey && <p> Public Key : {publicKey}</p>}
    </>;
}

export default KeyGeneration;
