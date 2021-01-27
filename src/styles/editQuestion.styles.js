const styles = (theme) => {
  return {
    btn: {
      color: theme.palette.text.light,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    imgUploadBtn: {
      color: theme.palette.text.light,
      background: theme.palette.primary.main,
      "&:hover": {
        background: theme.palette.primary.dark,
      },
    },
    dangerText: {
      color: theme.palette.danger.main,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  };
};

export default styles;
