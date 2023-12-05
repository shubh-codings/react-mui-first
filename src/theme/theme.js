import { createTheme } from "@mui/material";
import { blue,green } from '@mui/material/colors'

export const theme = createTheme({
    palette:{
        primary:{
            main:green[700]
        },
        secondary:{
            main:blue[400]
        },
        light:{
            main:'#fff'
        },
        dark:{
            main:'#000'
        },
        otherColor:{
            main:'#999'
        }
    }
})