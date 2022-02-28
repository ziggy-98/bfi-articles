import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        "fontFamily": `'Source Sans Pro', sans-serif`,
        h1: {
            fontSize: '4.5rem'
        }
    },
    palette: {
        secondary: {
            main: 'rgb(120, 61, 246)'
        }
    }
})

export default theme;