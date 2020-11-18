import { ADD, GET, DELETE, DELETE_ALL } from "./type";

export const getAllNotes=()=>{
    return {
        type:GET
    };
}
export const addNote=(note:any)=>{
    return {
        type:ADD,
        payload:note
    };
}
export const deleteNote=(uuid:string)=>{
    return {
        type:DELETE,
        payload:uuid
    };
}
export const deleteAllNote=()=>{
    return {
        type:DELETE_ALL
    };
}