import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";

function KeyGeneration() {
    return <>
        <h1>Key Generation</h1>

        <RadioButton options={['ECDSA', 'Curve25519', 'RSA', 'EDDSA']} />
        <br />
        <Button variant="outlined" size="large" color="success">SUBMIT</Button>
    </>;
}

export default KeyGeneration;
