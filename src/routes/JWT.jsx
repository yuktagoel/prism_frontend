import Button from '@mui/material/Button';
import RadioButton from "../components/RadioButton";
import ValidationMenu from '../components/ValidationMenu';

function JWT() {
    return <>
        <h1>JWT</h1>

        <RadioButton options={['ES256', 'ED25519']} />
        <br />

        <ValidationMenu inputLabel={"Key ID"} token={"JWT"} />
        <Button variant="contained" size="large" color="success">SUBMIT</Button>
    </>;
}

export default JWT;
