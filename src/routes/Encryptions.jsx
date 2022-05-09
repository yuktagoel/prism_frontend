import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import RadioButton from "../components/RadioButton";

function Encryption() {
    return <>
        <h1>Encryption</h1>

        <RadioButton options={['Curve25519', 'RSA', 'ED25519']} />

        <TextField label="Text to be encrypted" variant="standard" color="warning" style={{ width: 350, marginTop: 30 }} />

        <Stack direction="row" spacing={2} margin={4}>
            <TextField placeholder="Primary Key" variant="outlined" color="warning" />
            <TextField placeholder="Public Key" variant="outlined" color="warning" />
        </Stack>

        <Button variant="contained" size="large" color="success">SUBMIT</Button>
    </>;
}

export default Encryption;
