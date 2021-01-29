const styles = (theme) => {
  return {
    delete: {
      "&:hover": {
        color: theme.palette.danger.main,
      },
    },
    edit: {
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
    deleteBtnContained: {
      background: theme.palette.danger.main,
      color: "#ffffff",
      "&:hover": {
        background: theme.palette.danger.dark,
      },
    },
  };
};

export default styles;
