import { CREATE_TAG, DELETE_TAG } from "./actionType";
import { uuid } from "uuidv4";

export const createTag = (data) => {
    let payload = { ...data, _id: uuid() };
    return {
        type: CREATE_TAG,
        payload,
    };
};

export const deleteTag = (_id) => ({
    type: DELETE_TAG,
    payload: _id,
});
