import {
    USER_LOGIN
} from 'constants/user';

const initialState = {
};

export default function user(state = initialState,actions){
    switch(actions.type){
        case USER_LOGIN:
            return {...state};
        default: 
            return state;
    }
} 