import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import cookie from "js-cookie";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Alert = (props) => {
  const classes = useStyles();
  const { open, setOpen } = props;
  const handleOpen = () => {
    setOpen(true);
  };

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
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
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
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Alert;
