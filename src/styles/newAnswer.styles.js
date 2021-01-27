const styles = (theme) => {
  return {
    btn: {
      color: theme.palette.text.light,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  };
};

export default styles;
