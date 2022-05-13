import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import ValidationMenu from '../components/ValidationMenu';

function Validation() {
    return <>
        <h1>Validation</h1>

        <RadioButton options={['RSA', 'ED25519']} />
        <br />

        <ValidationMenu inputLabel={"Text"} token={"Signature"} />
        <Button variant="contained" size="large" color="success">SUBMIT</Button>
    </>;
}

export default Validation;
