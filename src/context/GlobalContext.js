import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// export const GlobalContext = createContext({
//     tasks: [
//         {
//             title: 'Limpiar Casa',
//             done: false
//         },
//         {
//             title: 'Mtto Coche',
//             done: false
//         },
//         {
//             title: 'Pagar Servicios',
//             done: false
//         },
//         {
//             title: 'Pagar Escuela',
//             done: false
//         },
//         {
//             title: 'Practicar Guitarra',
//             done: false
//         },
//     ]
// })

const initialState = {
    tasks: [
        {
            title: 'Limpiar Casa',
            done: false
        },
        {
            title: 'Mtto Coche',
            done: false
        },
        {
            title: 'Pagar Servicios',
            done: false
        },
        {
            title: 'Pagar Escuela',
            done: false
        },
        {
            title: 'Practicar Guitarra',
            done: false
        },
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addTask = (task) => {
        dispatch({type: 'ADD_TASK', payload: task})
    }

    const deleteTasks = () => {
        dispatch({type: 'DELETE_TASKS'});
    }

    return (
        <GlobalContext.Provider value={{...state, addTask, deleteTasks}}>
            {children}
        </GlobalContext.Provider>
    )
}