import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTag } from "../redux/tag/tagActions";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

function ChipsArray({ tags }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleDelete = (chipId) => {
        dispatch(deleteTag(chipId));
    };

    return (
        (Array.isArray(tags) && tags.length && (
            <Paper component="ul" className={classes.root} elevation={0} variant="outlined">
                <Grid container justify="center">
                    <Typography variant="h6"> Available Tags</Typography>
                </Grid>
                {tags.map((data) => {
                    return (
                        <li key={data.key}>
                            <Chip
                                size="small"
                                color="primary"
                                label={data.tag}
                                onDelete={() => handleDelete(data._id)}
                                className={classes.chip}
                            />
                        </li>
                    );
                })}
            </Paper>
        )) ||
        null
    );
}

const mapStateToProp = (state) => ({
    ...state.tags,
});

export default connect(mapStateToProp)(ChipsArray);
