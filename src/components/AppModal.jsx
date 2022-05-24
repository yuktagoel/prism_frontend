import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  wordWrap: 'break-word',
};

export default function AppModal({ setShowModal, displayObject }) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setShowModal(false);
  }

  console.log(displayObject);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {Object.keys(displayObject).map(key =>
            <>
              <Typography id="modal-modal-title" variant="h5" component="h2" color={"lightBlue"}>
                {key} :
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} color={"teal"}>
                {displayObject[key]}
              </Typography>
              <br />
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
