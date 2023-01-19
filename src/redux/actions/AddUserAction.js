import { ADD_USER, DELETE_USER, EDIT_USER, UPDATE_USER } from "../type/type"

export const addUser = (payload)=>({
    type: ADD_USER,
    payload
})
export const deleteUser  = (payload)=>({
    type:DELETE_USER,
    payload
})
export const edituser = (payload)=>({
    type:EDIT_USER,
    payload
})
export const updateUser = (payload)=>({
    type: UPDATE_USER,
    payload
})