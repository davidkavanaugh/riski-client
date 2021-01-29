import React from "react";
import { TextField, Button } from "@material-ui/core";
import css from "./RiskProfileForm.module.css";

const RiskProfileForm = (props) => {
  const { handleSubmit, handleChange } = props;
  const { minScore, maxScore, title, description } = props.state;
  const getErrors = (propsArr) => {
    for (let i = 0; i < propsArr.length; i++) {
      if (propsArr[i].length < 1) {
        return true;
      }
    }
    return false;
  };
  return (
    <div className={css.wrapper}>
      <form autoComplete="off" className={css.form}>
        <div>
          <TextField
            style={{ marginRight: "12px" }}
            label="Min Score"
            name="minScore"
            variant="outlined"
            type="number"
            value={minScore}
            onChange={handleChange}
            required
            error={getErrors([minScore])}
          />
          <TextField
            style={{ marginBottom: "12px" }}
            label="Max Score"
            name="maxScore"
            variant="outlined"
            type="number"
            value={maxScore}
            onChange={handleChange}
            required
            error={getErrors([maxScore])}
          />
        </div>
        <TextField
          style={{ marginBottom: "12px" }}
          label="Title"
          name="title"
          fullWidth
          variant="outlined"
          value={title}
          onChange={handleChange}
          required
          error={getErrors([title])}
        />
        <TextField
          style={{ marginBottom: "12px" }}
          label="Description"
          name="description"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={handleChange}
          required
          error={getErrors([description])}
        />

        <Button
          style={{ color: "white" }}
          fullWidth
          color="primary"
          variant="contained"
          onClick={handleSubmit}
          disabled={getErrors([minScore, maxScore, title, description])}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RiskProfileForm;
