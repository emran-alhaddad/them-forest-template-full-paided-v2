const Drawer = skin => {
  return {
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          boxShadow: theme.shadows[skin === 'default' ? 7 : 0]
        })
      }
    }
  }
}

export default Drawer
