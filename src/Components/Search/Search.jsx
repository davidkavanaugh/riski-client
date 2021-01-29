import React from "react";
import { TextField, Button, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import css from "./Search.module.css";
const Search = (props) => {
  return (
    <>
      <Paper className={css.wrapper}>
        <TextField
          label="Search..."
          name="search"
          fullWidth
          variant="outlined"
        />
        <span className={css.spacer}></span>
        <Button
          style={{ color: "white", height: "55px", width: "65px" }}
          className={css.searchBtn}
          size="large"
          color="primary"
          variant="contained"
        >
          <SearchIcon />
        </Button>
      </Paper>
    </>
  );
};

export default Search;
