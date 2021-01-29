import React, { useRef, useEffect } from "react";
import { navigate } from "@reach/router";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import cookie from "js-cookie";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    cookie.remove("survey");
    navigate("/new");
    handleClose();
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button
        style={{ color: "white" }}
        color="primary"
        variant="contained"
        onClick={handleClickOpen("paper")}
      >
        Results
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title"></DialogTitle>
        <DialogContent>
          <h2 style={{ marginTop: "0px" }}>Moderate</h2>
          <p>
            Your primary investment goal is to focus on long-term growth of
            principal but within the context of moderating overall levels of
            risk through allocation of portfolio assets in a balanced manner
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            style={{ color: "white" }}
            onClick={handleSubmit}
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
