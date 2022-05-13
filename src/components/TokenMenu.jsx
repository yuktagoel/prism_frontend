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

export default function TokenMenu({ token }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 0.15, display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab label="Generate & Sign" />
        <Tab label="Verify & Decode" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TextField label="Key ID" variant="standard" color="warning" margin="none" style={{ width: 350, marginBottom: 3 }} /> <br />
        <TextField label="Private Key" placeholder="(optional)" variant="outlined" color="warning" margin="normal" style={{ width: 350 }} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField label={token} variant="standard" color="error" margin="none" style={{ width: 350, marginBottom: 3 }} /> <br />
        <TextField label="Public Key" variant="outlined" color="error" margin="normal" style={{ width: 350 }} />
      </TabPanel>
    </Box>
  );
}
