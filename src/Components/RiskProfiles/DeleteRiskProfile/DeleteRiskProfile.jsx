import React, { useState, useContext } from "react";
import { RiskProfilesContext } from "../../../context";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Dialog, DialogActions, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "../../../styles/actionButtons.styles";
import css from "./DeleteRiskProfile.module.css";

const DeleteRiskProfile = (props) => {
  const { idx } = props;
  const useStyles = makeStyles((theme) => styles(theme));
  const classes = useStyles();
  const { state, dispatch } = useContext(RiskProfilesContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (idx) => {
    dispatch({
      type: "DELETE_deleteRiskProfile",
      index: idx,
    });
    handleClose();
  };
  return (
    <>
      <IconButton size="small" edge="start" onClick={handleOpen}>
        <DeleteIcon className={classes.delete} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={css.dialog}
      >
        <div className={css.dialog}>
          <h2>Delete Risk Profile ?</h2>
          <DialogActions>
            <div>
              <Button variant="contained" color="default" onClick={handleClose}>
                Cancel
              </Button>
              <span className={css.spacer}></span>
              <Button
                variant="contained"
                className={classes.deleteBtnContained}
                onClick={() => handleSubmit(idx)}
              >
                Delete
              </Button>
            </div>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
};

export default DeleteRiskProfile;
