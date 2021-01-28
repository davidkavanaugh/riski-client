import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogContent, Backdrop } from "@material-ui/core";
import cookie from "js-cookie";

const useStyles = makeStyles((theme) => ({
  dialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Alert = (props) => {
  const classes = useStyles();
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleSubmit = () => {
    cookie.remove("survey");
    handleClose();
  };

  return (
    <Dialog
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.dialog}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <DialogContent style={{ padding: "10px 25px 25px 25px" }}>
        <h2 id="transition-modal-title">New Survey?</h2>
        <Button
          color="default"
          variant="contained"
          style={{ marginRight: "5px" }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ color: "white" }}
          onClick={handleSubmit}
        >
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Alert;
