const FabButton = () => {
  return {
    MuiFab: {
      styleOverrides: {
        default: ({ theme }) => ({
          color: theme.palette.text.primary
        })
      }
    }
  }
}

export default FabButton
