import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

export function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant='text'
        color='primary'
        onClick={handleClickOpen}
        style={{ position: 'fixed', right: '1em', top: '4em', zIndex: 2 }}
      >
        About
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
          {'About Moodli.live'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            The goal of the project is to use Twitter tweets to identify the
            emotional state of the population and the causing factors. This
            enables authorities to intervene in a targeted manner.
          </DialogContentText>
          <DialogContentText>
            Emotions are triggered by the conscious or unconscious perception of
            an event or situation and lead to a change of the physiological and
            psychological state as well as social behavior. In the uncertain and
            unpredictable times of Corona, it is important to maintain the
            mental and physical well-being of the population and a solitary
            spirit.
          </DialogContentText>
          <DialogContentText>
            <Link
              href='https://devpost.com/software/moodli'
              color='secondary'
              underline='always'
            >
              Read more
            </Link>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
