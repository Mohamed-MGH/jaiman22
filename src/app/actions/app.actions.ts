import { Action } from "@ngrx/store";
import { User } from "../model/app.mode";


export const ADD_NAME = 'ADD NAME'

export class AddName implements Action {
    readonly type = ADD_NAME
    constructor(public payload: User){}
}

export type Actions = AddName
