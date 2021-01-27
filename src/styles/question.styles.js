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
  };
};

export default styles;
