import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import ValidationMenu from '../components/ValidationMenu';
import API from '../services/API.js';

function JWT() {
    const [inputData, setInputData] = useState({ tab: 0 });

    const [jwt, setJWT] = useState();
    const [outputPrivateKey, setOutputPrivateKey] = useState();
    const [outputPublicKey, setOutputPublicKey] = useState();

    const [isVerified, setIsVerified] = useState();
    const [decodedHeader, setDecodedHeader] = useState();

    const algorithmList = ['ES256', 'ED25519'];

    const [algorithm, setAlgorithm] = useState(algorithmList[0]);

    const handleAlgorithmChange = value => setAlgorithm(value);

    const handleClick = async () => {
        const { tab, sign, verify, privateKey, publicKey } = inputData;

        if (tab === 0) {
            const { encodedPriKey, encodedPubKey, jwtToken } = await API.genJWT({ kid: sign, privateKey }, algorithm);
            setJWT(jwtToken);
            setOutputPrivateKey(encodedPriKey)
            setOutputPublicKey(encodedPubKey);
        } else {
            setJWT(null);
            setOutputPrivateKey(null)
            setOutputPublicKey(null);
            const { verificationStatus, decodedJWTHeader } = await API.verifyJWT({ jwt: verify, publicKey }, algorithm);
            setIsVerified(verificationStatus);
            setDecodedHeader(decodedJWTHeader)
            console.log(decodedJWTHeader);
        }
    }

    return <>
        <h1>JWT</h1>

        <RadioButton options={algorithmList} handleRadioChange={handleAlgorithmChange} />
        <br />

        <ValidationMenu signLabel={"Key ID"} verifyLabel={"JWT"} setInputData={setInputData} />
        <Button variant="contained" size="large" color="success" onClick={handleClick}>SUBMIT</Button>

        <br />
        {jwt && <p>JWT: {jwt}</p>}
        {outputPrivateKey && <p> Private Key : {outputPrivateKey}</p>}
        {outputPublicKey && <p> Public Key : {outputPublicKey}</p>}

        {isVerified && <p>Verification Status: {isVerified.toString()}</p>}
        {decodedHeader && <p>Decoded JWT Header: {decodedHeader.toString()}</p>}
    </>;
}

export default JWT;
