import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";

function Decryption() {
    return <>
        <h1>Decryption</h1>

        <RadioButton options={['Curve25519', 'RSA', 'ED25519']} />
        <br />
        <Button variant="outlined" size="large" color="success">SUBMIT</Button>
    </>;
}

export default Decryption;
