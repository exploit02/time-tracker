/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";

const filter = createFilterOptions();

function FreeSoloCreateOption({ tags, value, setValue }) {
    console.log(tags);

    return (
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                    setValue(newValue);
                } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    // setValue({
                    //     tag: newValue.inputValue,
                    // });
                } else {
                    setValue(newValue.tag);
                }
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                // Suggest the creation of a new value
                if (params.inputValue !== "") {
                    filtered.push({
                        inputValue: params.inputValue,
                        tag: `Add "${params.inputValue}"`,
                    });
                }

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={tags || []}
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                    return option;
                }

                // Add "xxx" option created dynamically
                if (option.inputValue) {
                    return option.inputValue;
                }

                // Regular option
                return option.tag;
            }}
            renderOption={(option) => option.tag}
            // style={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
                <TextField {...params} label="Free solo with text demo" variant="outlined" fullWidth />
            )}
        />
    );
}

const mapStateToProps = (state) => ({
    ...state.tags,
});

export default connect(mapStateToProps)(FreeSoloCreateOption);
