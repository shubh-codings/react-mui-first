import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

export default function RightBar() {
    return (
        <Box flex={1.5} sx={{ display: { xs: "none", md: "block" } }}>
            <Box position='sticky'>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Online Friends</Typography>
                <AvatarGroup max={6} sx={{ width: '300px' }}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/9961339/pexels-photo-9961339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/9412378/pexels-photo-9412378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/9961339/pexels-photo-9961339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/9412378/pexels-photo-9412378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/9961339/pexels-photo-9961339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/9412378/pexels-photo-9412378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>

                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>

            </Box>
        </Box>
    )
}
