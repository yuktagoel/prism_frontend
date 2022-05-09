import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";

function CWT() {
    return <>
        <h1>CWT</h1>

        <RadioButton options={['ED25519', 'ECDSA256']} />
        <br />
        <Button variant="outlined" size="large" color="success">SUBMIT</Button>
    </>;
}

export default CWT;
