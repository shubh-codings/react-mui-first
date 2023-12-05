import styled from "@emotion/styled";
import { AccountCircle, List, LogoDev, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Badge, Box, InputBase, MenuItem, Stack, Toolbar, Typography, Menu } from "@mui/material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: "space-between"
})
const NavSearch = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    width: '30%',
    color: theme.palette.dark.main,
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,

}))
const NavIcons = styled(Box)(({ theme }) => ({
    display: 'none',
    color: theme.palette.light.main,
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }

}))
const MenuList = styled(Stack)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky" >
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: 'none', sm: "block" } }}>MUI</Typography>
                <LogoDev sx={{ display: { xs: 'block', sm: "none" } }} />
                <NavSearch><InputBase placeholder="Search..." /></NavSearch>
                <NavIcons flexDirection='row' gap={2}>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <AccountCircle />
                    </Badge>
                </NavIcons>
                <MenuList >
                    <List onClick={() => setOpen(true)}/>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        // anchorEl={anchorEl}
                        open={open}
                        onClose={() => setOpen(false)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem >
                            <Badge badgeContent={4} color="error">
                                <Typography variant="p" >Mail</Typography>
                            </Badge>
                        </MenuItem>
                        <MenuItem >
                            <Badge badgeContent={2} color="error">
                                
                                <Typography variant="p" >Notifications</Typography>
                            </Badge>
                        </MenuItem>
                        <MenuItem >
                            <Badge badgeContent={1} color="error">
                                
                                <Typography variant="p" >User</Typography>
                            </Badge>
                        </MenuItem>
                    </Menu>
                </MenuList>
            </StyledToolbar>
        </AppBar>
    )
}
