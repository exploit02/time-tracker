import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";

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
    const classes = useStyles();

    const handleDelete = (chipId) => () => {};

    return (
        <Paper component="ul" className={classes.root} elevation={0} variant="outlined">
            {tags.map((data) => {
                return (
                    <li key={data.key}>
                        <Chip
                            size="small"
                            color="primary"
                            label={data.tag}
                            onDelete={handleDelete(data._id)}
                            className={classes.chip}
                        />
                    </li>
                );
            })}
        </Paper>
    );
}

const mapStateToProp = (state) => ({
    ...state.tags,
});

export default connect(mapStateToProp)(ChipsArray);
