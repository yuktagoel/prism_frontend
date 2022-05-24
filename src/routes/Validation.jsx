import { useState } from 'react';
import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import ValidationMenu from '../components/ValidationMenu';
import AppModal from '../components/AppModal';
import API from '../services/API.js';

function Validation() {
    const [inputData, setInputData] = useState({ tab: 0 });

    const [showModal, setShowModal] = useState(false);
    const [displayObject, setDisplayObject] = useState({});

    const algorithmList = ['RSA', 'ED25519'];

    const [algorithm, setAlgorithm] = useState(algorithmList[0]);

    const handleAlgorithmChange = (value) => setAlgorithm(value);

    const handleClick = async () => {
        const { tab, sign, verify, privateKey, publicKey, plainText } = inputData;
        console.log(sign);
        if (tab === 0) {
            const { signature } = await API.sign({ plainText: sign, privateKey }, algorithm);
            setDisplayObject({
                "Signature": signature
            });
        } else {
            const { verificationStatus } = await API.verify({ signature: verify, publicKey, plainText }, algorithm);
            setDisplayObject({
                "Verification Status": verificationStatus ? "True" : "False",
            });
        }
        setShowModal(true);
    }

    return <>
        <h1>Validation</h1>

        <RadioButton options={algorithmList} handleRadioChange={handleAlgorithmChange} />
        <br />

        <ValidationMenu signLabel={"Text"} verifyLabel={"Signature"} setInputData={setInputData} />
        <Button variant="contained" size="large" color="success" onClick={handleClick}>SUBMIT</Button>

        {showModal && <AppModal setShowModal={setShowModal} displayObject={displayObject} />}
    </>;
}

export default Validation;
