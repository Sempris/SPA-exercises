export const addTaskAction = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const delTaskAction = (id) => {
    return {
        type: 'DEL_TASK',
        payload: id
    }
}