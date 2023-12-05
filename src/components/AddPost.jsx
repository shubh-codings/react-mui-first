import styled from "@emotion/styled";
import { Add, Delete, EmojiEmotions, Image, PersonAdd, Videocam } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

const StyledModal = styled(Modal)({
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: "center",
    gap: 10,
    padding: '10px'
})


export default function AddPost() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip
                title="Add"
                sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}
                onClick={() => setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>

            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box bgcolor='background.default' color='text.primary' borderRadius={5} width={400} height={300} padding='10px'>
                    <Typography variant="h6" color='grey' textAlign='center' pt={1}>Creeate Post</Typography>
                    <UserBox>
                        <Avatar
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography variant="span" fontWeight={400} fontFamily='roboto'>John Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{width:'100%'}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="warning"/>
                        <Image color="secondary"/>
                        <Videocam color="secondary"/>
                        <PersonAdd color="error"/>

                    </Stack>
                    <ButtonGroup fullWidth>
                        <Button variant="contained">Post</Button>
                        <Button sx={{width:'100px'}}><Delete/></Button>
                    </ButtonGroup>

                </Box>
            </StyledModal>

        </>
    )
}
