import React, { useContext, useState } from "react";
import { RiskProfilesContext } from "../../../context";
import RiskProfileForm from "../RiskProfileForm/RiskProfileForm";
import { Button, Dialog, DialogContent } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import css from "./NewRiskProfile.module.css";

const NewRiskProfile = () => {
  const { state, dispatch } = useContext(RiskProfilesContext);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: `PATCH_${name}`,
      property: name,
      payload: value,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    dispatch({
      type: "CLEAR",
    });
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: `POST_createRiskProfile`,
    });
    dispatch({
      type: "CLEAR",
    });
    handleClose();
  };

  return (
    <>
      <Button
        style={{ color: "white" }}
        variant="contained"
        color="primary"
        size="large"
        onClick={handleOpen}
      >
        <AddCircleIcon />
        <span className={css.btnSpacer}></span>Create New
      </Button>
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

export default NewRiskProfile;
