import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField } from "@material-ui/core";
import Tag from "../components/tag";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/task/taskActions";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [task, setTask] = useState("");
    const [tag, setTag] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const saveTask = () => {
        if (task) {
            dispatch(createTask({ task, tag }));
            handleClose();
            setTag("");
            setTask("");
        } else {
            alert("Task Can't be empty");
        }
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Add Task
            </Button>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={true}
                maxWidth={"md"}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Task
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container justify="space-around">
                        <Grid item sm={4} md={5}>
                            <TextField
                                label="Task"
                                name="task"
                                variant="outlined"
                                value={task}
                                onChange={(event) => setTask(event.target.value)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item sm={4} md={5}>
                            <Tag value={tag} setValue={setTag} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={saveTask} color="primary">
                        Save Task
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
