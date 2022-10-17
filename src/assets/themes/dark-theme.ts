import { createTheme } from '@mui/material'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#262626',
		},
		secondary: {
			main: '#f5f5f5',
		},
	},
	components: {
		MuiLink: {
			defaultProps: {
				underline: 'none',
			},
		},
	},
})

export default darkTheme
