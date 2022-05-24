import { useState } from 'react';
import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import AppModal from '../components/AppModal';
import API from '../services/API.js';

function KeyGeneration() {
    const [showModal, setShowModal] = useState(false);
    const [displayObject, setDisplayObject] = useState({});

    const algorithmList = ['ED25519', 'Curve25519', 'RSA', 'ECDSA'];

    const [algorithm, setAlgorithm] = useState(algorithmList[0]);

    const handleAlgorithmChange = value => setAlgorithm(value);

    const handleClick = async () => {
        const { encodedPriKey, encodedPubKey } = await API.genKey(algorithm);
        setDisplayObject({
            "Private Key": encodedPriKey,
            "Public Key": encodedPubKey
        });
        setShowModal(true);
    }

    return <>
        <h1>Key Generation</h1>

        <RadioButton options={algorithmList} handleRadioChange={handleAlgorithmChange} />
        <br />

        <Button variant="contained" size="large" color="success" onClick={handleClick}>SUBMIT</Button>

        {showModal && <AppModal setShowModal={setShowModal} displayObject={displayObject} />}
    </>;
}

export default KeyGeneration;
