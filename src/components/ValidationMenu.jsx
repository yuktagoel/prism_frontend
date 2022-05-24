import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingLeft: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function ValidationMenu({ signLabel, verifyLabel, setInputData }) {
  const [tabIndexValue, setTabIndexValue] = React.useState(0);

  const [sign, setSign] = React.useState();
  const [verify, setVerify] = React.useState();

  const [privateKey, setPrivateKey] = React.useState();
  const [publicKey, setPublicKey] = React.useState();

  const [plainText, setPlainText] = React.useState();

  const handleTabsChange = (_, newValue) => {
    setTabIndexValue(newValue);
    setInputData(prevData => { return { ...prevData, tab: newValue } });
  };

  const handleSignChange = (event) => {
    setSign(event.target.value);
    setInputData(prevData => { return { ...prevData, sign: event.target.value } });
  };

  const handleVerifyChange = (event) => {
    setVerify(event.target.value);
    setInputData(prevData => { return { ...prevData, verify: event.target.value } });
    console.log(event.target.value);
  };

  const handlePrivateKeyChange = (event) => {
    setPrivateKey(event.target.value);
    setInputData(prevData => { return { ...prevData, privateKey: event.target.value } });
  };

  const handlePublicKeyChange = (event) => {
    setPublicKey(event.target.value);
    setInputData(prevData => { return { ...prevData, publicKey: event.target.value } });
  };

  const handlePlainTextChange = (event) => {
    setPlainText(event.target.value);
    setInputData(prevData => { return { ...prevData, plainText: event.target.value } });
  };

  return (
    <Box
      sx={{ flexGrow: 0.15, display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        value={tabIndexValue}
        onChange={handleTabsChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab label="Generate & Sign" />
        <Tab label="Verify & Decode" />
      </Tabs>
      <TabPanel value={tabIndexValue} index={0}>
        <TextField label={signLabel} variant="standard" color="warning" margin="none" style={{ width: 350, marginBottom: 3 }} value={sign} onChange={handleSignChange} /> <br />
        <TextField label="Private Key" placeholder="(optional)" variant="outlined" color="warning" margin="normal" style={{ width: 350 }} value={privateKey} onChange={handlePrivateKeyChange} />
      </TabPanel>
      <TabPanel value={tabIndexValue} index={1}>
        {verifyLabel === "Signature" && <> <TextField label="Plain Text" variant="standard" color="error" margin="none" style={{ width: 350, marginBottom: 3 }} value={plainText} onChange={handlePlainTextChange} /> <br /> </>}
        <TextField label={verifyLabel} variant="standard" color="error" margin="none" style={{ width: 350, marginBottom: 3 }} value={verify} onChange={handleVerifyChange} /> <br />
        <TextField label="Public Key" variant="outlined" color="error" margin="normal" style={{ width: 350 }} value={publicKey} onChange={handlePublicKeyChange} />
      </TabPanel>
    </Box>
  );
}
