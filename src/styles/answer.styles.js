const styles = (theme) => {
  return {
    delete: {
      "&:hover": {
        color: theme.palette.danger.main,
      },
    },
    edit: {
      "&:hover": {
        color: "black",
      },
    },
    points: { color: theme.palette.primary.dark, paddingRight: "75px" },
  };
};

export default styles;
