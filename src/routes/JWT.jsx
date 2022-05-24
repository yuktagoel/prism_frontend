import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import ValidationMenu from '../components/ValidationMenu';
import AppModal from '../components/AppModal';
import API from '../services/API.js';

function JWT() {
    const [inputData, setInputData] = useState({ tab: 0 });

    const [showModal, setShowModal] = useState(false);
    const [displayObject, setDisplayObject] = useState({});

    const algorithmList = ['ES256', 'ED25519'];

    const [algorithm, setAlgorithm] = useState(algorithmList[0]);

    const handleAlgorithmChange = value => setAlgorithm(value);

    const handleClick = async () => {
        const { tab, sign, verify, privateKey, publicKey } = inputData;

        if (tab === 0) {
            const { encodedPriKey, encodedPubKey, jwtToken } = await API.genJWT({ kid: sign, privateKey }, algorithm);
            setDisplayObject({
                "JWT": jwtToken,
                "Private Key": encodedPriKey,
                "Public Key": encodedPubKey
            });
        } else {
            const { verificationStatus } = await API.verifyJWT({ jwt: verify, publicKey }, algorithm);
            setDisplayObject({
                "Verification Status": verificationStatus ? "True" : "False",
            });
        }
        setShowModal(true);
    }

    return <>
        <h1>JWT</h1>

        <RadioButton options={algorithmList} handleRadioChange={handleAlgorithmChange} />
        <br />

        <ValidationMenu signLabel={"Key ID"} verifyLabel={"JWT"} setInputData={setInputData} />
        <Button variant="contained" size="large" color="success" onClick={handleClick}>SUBMIT</Button>

        {showModal && <AppModal setShowModal={setShowModal} displayObject={displayObject} />}
    </>;
}

export default JWT;
