import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";

function JWT() {
    return <>
        <h1>JWT</h1>

        <RadioButton options={['ES256', 'ED25519']} />
        <br />

        <Button variant="contained" size="large" color="success">SUBMIT</Button>
    </>;
}

export default JWT;
