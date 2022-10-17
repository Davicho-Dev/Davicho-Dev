import { createTheme } from '@mui/material'

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#f5f5f5',
		},
		secondary: {
			main: '#262626',
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

export default lightTheme
