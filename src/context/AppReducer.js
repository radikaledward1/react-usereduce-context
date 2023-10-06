export const AppReducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, action.payload]
            };
        case 'DELETE_TASKS':
            return {
                tasks: []
            }
        default:
            break;
    }
}