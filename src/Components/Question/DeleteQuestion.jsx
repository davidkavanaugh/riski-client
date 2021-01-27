import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SurveyContext } from "../../Context";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  deleteBtn: {
    marginLeft: "5px",
    background: theme.palette.danger.main,
    color: theme.palette.text.light,
    "&:hover": {
      background: theme.palette.danger.dark,
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DeleteQuestion = (props) => {
  const classes = useStyles();
  const { open, handleClose, idx } = props;
  const { dispatch } = useContext(SurveyContext);
  const handleDelete = (idx) => {
    dispatch({
      type: "deleteQuestion",
      index: idx,
    });
    handleClose();
  };
  return (
    <div>
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
            <h2>Delete Question?</h2>
            <div>
              <Button variant="contained" color="default" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                className={classes.deleteBtn}
                onClick={() => handleDelete(idx)}
              >
                Delete
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeleteQuestion;
