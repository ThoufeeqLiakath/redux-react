import { state } from "./store";
import { GET, DELETE, DELETE_ALL, ADD } from "./type";

export default function reducer(initialState=state,action:any)
{
    console.log('inside reducer', action);
    switch(action.type)
    {
        case GET:
            return initialState;
        case DELETE_ALL:
            initialState.notes=[];
            return initialState;
        case DELETE:            
            return {...initialState,notes:initialState.notes.filter(x=>x.id!==action.payload)};
            // let notes=initialState.notes.filter(x=>x.id!==action.payload);
            // initialState.notes=notes;
            // console.info(initialState);
            // return initialState;
        case ADD:
            return{
                ...initialState,notes:[action.payload,...initialState.notes]
            };
        default:
            return initialState;
    }};
