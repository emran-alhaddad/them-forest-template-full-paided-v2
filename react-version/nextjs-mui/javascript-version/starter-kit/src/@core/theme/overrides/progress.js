const Progress = () => {
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: 12,
          borderRadius: '10px',
          backgroundColor: theme.palette.customColors.trackBg,
          '& .MuiLinearProgress-dashed': {
            marginTop: theme.spacing(1)
          }
        }),
        bar: {
          borderRadius: '10px'
        }
      }
    }
  }
}

export default Progress
