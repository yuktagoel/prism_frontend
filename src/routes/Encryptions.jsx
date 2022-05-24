import { useState } from 'react';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import AppModal from '../components/AppModal';
import API from '../services/API';

function Encryption() {
    const [plainText, setPlainText] = useState();
    const [privateKey, setPrivateKey] = useState();
    const [publicKey, setPublicKey] = useState();

    const [showModal, setShowModal] = useState(false);
    const [displayObject, setDisplayObject] = useState({});

    const algorithmList = ['Curve25519', 'RSA', 'ED25519'];

    const [algorithm, setAlgorithm] = useState(algorithmList[0]);

    const handleAlgorithmChange = value => setAlgorithm(value);

    const handleClick = async () => {
        const { cipherText, secretKey, nonce } = await API.encrypt({ plainText, privateKey, publicKey }, algorithm);
        setDisplayObject({
            "Encrypted Text": cipherText,
            "Nonce": nonce
        });
        setShowModal(true);
    }

    return <>
        <h1>Encryption</h1>

        <RadioButton options={algorithmList} handleRadioChange={handleAlgorithmChange} />

        <TextField label="Text to be encrypted" variant="standard" color="warning" style={{ width: 350, marginTop: 30 }} value={plainText} onChange={e => setPlainText(e.target.value)} />

        <Stack direction="row" spacing={2} margin={4}>
            <TextField placeholder="Private Key" variant="outlined" color="warning" value={privateKey} onChange={e => setPrivateKey(e.target.value)} />
            <TextField placeholder="Public Key" variant="outlined" color="warning" value={publicKey} onChange={e => setPublicKey(e.target.value)} />
        </Stack>

        <Button variant="contained" size="large" color="success" onClick={handleClick}>SUBMIT</Button>

        {showModal && <AppModal setShowModal={setShowModal} displayObject={displayObject} />}
    </>;
}

export default Encryption;
