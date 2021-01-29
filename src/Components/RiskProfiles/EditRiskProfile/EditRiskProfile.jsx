import React, { useState, useContext } from "react";
import { RiskProfilesContext } from "../../../context";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Dialog, DialogContent } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import RiskProfileForm from "../RiskProfileForm/RiskProfileForm";
import styles from "../../../styles/actionButtons.styles";

const EditRiskProfile = (props) => {
  const { idx } = props;
  const useStyles = makeStyles((theme) => styles(theme));
  const classes = useStyles();
  const { state, dispatch } = useContext(RiskProfilesContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    dispatch({
      type: "GET_findRiskProfile",
      index: idx,
    });
    setOpen(true);
  };
  const handleClose = () => {
    dispatch({
      type: "CLEAR",
    });
    setOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: `PATCH_${name}`,
      property: name,
      payload: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "PUT_updateRiskProfile",
      index: idx,
    });
    handleClose();
  };
  return (
    <>
      <IconButton size="small" edge="start" onClick={handleOpen}>
        <EditIcon className={classes.edit} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <RiskProfileForm
            state={state.riskProfile}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditRiskProfile;
