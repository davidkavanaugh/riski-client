import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { EditorContext } from "../../../context";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
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
  dialog: {
    padding: "10px 25px 25px 25px",
    display: "flex",
    flexDirection: "column",
  },
}));

const DeleteQuestion = (props) => {
  const classes = useStyles();
  const { open, handleClose, idx } = props;
  const { dispatch } = useContext(EditorContext);
  const handleDelete = (idx) => {
    dispatch({
      type: "deleteQuestion",
      index: idx,
    });
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions className={classes.dialog}>
          <h2>Delete Question ?</h2>
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
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteQuestion;
