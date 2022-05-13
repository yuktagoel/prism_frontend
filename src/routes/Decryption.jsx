import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import RadioButton from "../components/RadioButton";

function Decryption() {
    return <>
        <h1>Decryption</h1>

        <RadioButton options={['Curve25519', 'RSA', 'ED25519']} />

        <TextField label="Text to be decrypted" variant="standard" color="warning" style={{ width: 350, marginTop: 30 }} />

        <Stack direction="row" spacing={2} margin={4}>
            <TextField placeholder="Private Key" variant="outlined" color="warning" />
            <TextField placeholder="Public Key" variant="outlined" color="warning" />
        </Stack>

        <Button variant="contained" size="large" color="success">SUBMIT</Button>
    </>;
}

export default Decryption;
