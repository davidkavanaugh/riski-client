import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BlockIcon from "@material-ui/icons/Block";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import IconButton from "@material-ui/core/IconButton";

const Answer = (props) => {
  const useStyles = makeStyles((theme) => ({
    actions: {
      display: "flex",
      marginTop: "-3px",
    },
    btnSpacer: {
      width: "15px",
    },
    delete: {
      "&:hover": {
        color: "red",
      },
    },
    edit: {
      "&:hover": {
        color: "black",
      },
    },
    li: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    points: { color: theme.palette.primary.dark, paddingRight: "75px" },
    text: {},
    wrapper: {
      paddingRight: "0px",
      paddingLeft: "25px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
  }));

  const classes = useStyles();
  const { text, points } = props;
  return (
    <li>
      <span className={classes.li}>
        <span className={classes.text}>{text}</span>
        <span className={classes.wrapper}>
          <span className={classes.points}>{points}</span>
          <span className={classes.actions}>
            <IconButton className={classes.edit} size="small" edge="start">
              <EditOutlinedIcon />
            </IconButton>
            <span className={classes.btnSpacer}></span>
            <IconButton className={classes.delete} size="small" edge="start">
              <BlockIcon />
            </IconButton>
          </span>
        </span>
      </span>
    </li>
  );
};
export default Answer;
