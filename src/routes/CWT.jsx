import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import ValidationMenu from '../components/ValidationMenu';

function CWT() {
    return <>
        <h1>CWT</h1>

        <RadioButton options={['ES256', 'ED25519']} />
        <br />

        <ValidationMenu token={"CWT"} />
        <Button variant="contained" size="large" color="success">SUBMIT</Button>
    </>;
}

export default CWT;
