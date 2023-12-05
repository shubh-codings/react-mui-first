import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import Navbar from "./components/Navbar"
import LeftBar from "./components/LeftBar"
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"
import AddPost from "./components/AddPost"
import { useState } from "react"
import { blue, green } from "@mui/material/colors"

function App() {
  const [mode,setMode] = useState('light')

  const darkTheme = createTheme({
    palette:{
      mode:mode,
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

  return (
    <ThemeProvider theme={darkTheme}>

    <Box bgcolor='background.default' color='text.primary'>
      <Navbar/>
      <Stack flexDirection='row' justifyContent='space-between'>
        <LeftBar setMode={setMode} mode={mode}/>
        <Feed/>
        <RightBar/>
      </Stack>
      <AddPost/>
    </Box>
    </ThemeProvider>
  )
}

export default App
