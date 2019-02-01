import { User } from "../model/app.mode";
import { Action } from "rxjs/internal/scheduler/Action";
import * as UserActions from "../actions/app.actions"

const initialState: User = {
    name: 'Jaiman'
}

export function reducer (state: User[] = [initialState], action: UserActions.Actions){
    switch (action.type){
        case UserActions.ADD_NAME:
            return [...state, action.payload]

        default: 
            return state

    }

}