import { useState } from 'react';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import API from '../services/API';

function Decryption() {
    const [cipherText, setCipherText] = useState();
    const [nonce, setNonce] = useState();
    const [secretKey, setSecretKey] = useState();

    const [privateKey, setPrivateKey] = useState();
    const [publicKey, setPublicKey] = useState();

    const [text, setText] = useState();

    const algorithmList = ['Curve25519', 'RSA', 'ED25519'];

    const [algorithm, setAlgorithm] = useState(algorithmList[0]);

    const handleAlgorithmChange = value => setAlgorithm(value);

    const handleClick = async () => {
        const { plainText } = await API.decrypt({ cipherText, privateKey, publicKey, nonce, secretKey }, algorithm);
        setText(plainText);
    }

    return <>
        <h1>Decryption</h1>

        <RadioButton options={algorithmList} handleRadioChange={handleAlgorithmChange} />

        <TextField label="Text to be encrypted" variant="standard" color="warning" style={{ width: 350, marginTop: 30 }} value={cipherText} onChange={e => setCipherText(e.target.value)} />

        <Stack direction="row" spacing={2} margin={4}>
            <TextField placeholder="Private Key" variant="outlined" color="warning" value={privateKey} onChange={e => setPrivateKey(e.target.value)} />
            <TextField placeholder="Public Key" variant="outlined" color="warning" value={publicKey} onChange={e => setPublicKey(e.target.value)} />
        </Stack>

        <TextField label="Nonce" variant="standard" color="warning" style={{ width: 350 }} value={nonce} onChange={e => setNonce(e.target.value)} /> <br />

        <Button variant="contained" size="large" color="success" onClick={handleClick}>SUBMIT</Button>

        <br />
        {text && <p>Decrypted Text: {text}</p>}
    </>;
}

export default Decryption;
