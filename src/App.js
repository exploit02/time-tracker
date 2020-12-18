import React, { useState } from "react";
import TopNav from "./components/topNav";
import TaskAdd from "./components/taskAdd";
import AddTag from "./components/addTags";
import TaskList from "./components/taskList";
import { Container, Divider, Grid, makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: " 4px",
        display: "flex",
        alignItems: "center",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },

    margin: {
        margin: theme.spacing(1),
        "&>*": {
            margin: theme.spacing(1),
        },
    },
}));

function App() {
    const classes = useStyles();
    const [search, setSearch] = useState("");
    return (
        <div className="App">
            <TopNav />
            <div style={{ paddingTop: "4em" }}>
                <Container>
                    <Grid container justify="center">
                        <Grid item xs={3} sm={3} md={3}>
                            <Grid container className={classes.margin} justify="center" alignItems="center">
                                <TaskAdd />
                                <AddTag />
                            </Grid>
                        </Grid>
                        <Grid item xs={5} sm={5} md={5}>
                            <Paper component="form" className={classes.root}>
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search Task or Tags"
                                    inputProps={{ "aria-label": "search tasks tags" }}
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} className={classes.margin}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TaskList search={search} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default App;
