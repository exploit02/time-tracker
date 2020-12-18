import { CREATE_TASK, START_TASK, STOP_TASK, DELETE_TASK } from "./actionTypes";
import { uuid } from "uuidv4";

export const createTask = (data) => {
    let payload = {
        ...data,
        _id: uuid(),
        createdAt: new Date(),
        updatedAt: new Date(),
        start: false,
        stop: false,
    };
    return {
        type: CREATE_TASK,
        payload,
    };
};

export const startTask = (_id) => ({
    type: START_TASK,
    payload: _id,
});

export const stopTask = (_id) => ({
    type: STOP_TASK,
    payload: _id,
});

export const deleteTask = (_id) => ({
    type: DELETE_TASK,
    payload: _id,
});
