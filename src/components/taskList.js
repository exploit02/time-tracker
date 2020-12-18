import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import Grid from "@material-ui/core/Grid";

import DeleteIcon from "@material-ui/icons/Delete";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import StopIcon from "@material-ui/icons/Stop";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { connect } from "react-redux";
import { startTask, stopTask, deleteTask } from "../redux/task/taskActions";
import { useDispatch } from "react-redux";
import Timer from "./timer";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    action: {
        "&>*": {
            margin: theme.spacing(0.5),
        },
    },
    avatar: {
        color: "#F7F7F7",
    },
}));

function InteractiveList({ tasks, search }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    let filteredTask =
        (search &&
            tasks.filter(
                (item) =>
                    item.task.toLowerCase().includes(search.toLowerCase()) ||
                    item.tag.toLowerCase().includes(search.toLowerCase())
            )) ||
        tasks;

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <div className={classes.demo}>
                        <List>
                            {filteredTask.map((item) => (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                            {item.stop ? (
                                                <AssignmentTurnedInOutlinedIcon color="primary" />
                                            ) : item.start ? (
                                                <AssignmentOutlinedIcon color="secondary" />
                                            ) : (
                                                <EmailOutlinedIcon color="secondary" />
                                            )}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.task} secondary={item.tag} />

                                    <ListItemSecondaryAction className={classes.action}>
                                        {item.start && (
                                            <Button>
                                                <Timer startDate={item.startedAt} />
                                            </Button>
                                        )}
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            disabled={item.start || item.stop}
                                            onClick={() => dispatch(startTask(item._id))}
                                        >
                                            <PlayCircleOutlineIcon />
                                        </IconButton>
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            disabled={item.stop || !item.start}
                                            onClick={() => dispatch(stopTask(item._id))}
                                        >
                                            <StopIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            onClick={() => dispatch(deleteTask(item._id))}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = (state) => ({
    ...state.tasks,
});

export default connect(mapStateToProps)(InteractiveList);
