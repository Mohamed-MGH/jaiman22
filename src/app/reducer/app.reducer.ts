import { User } from '../model/app.mode';
import * as UserActions from '../actions/app.actions';

const initialState: User = {
    name: 'Jaiman'
};

export function reducer (state: User = initialState, action: UserActions.Actions) {
    console.log(action.payload);
    console.log(state);
    switch (action.type) {
        case UserActions.ADD_NAME:
            return {...state, name: action.payload};

        default:
            return state;

    }

}
