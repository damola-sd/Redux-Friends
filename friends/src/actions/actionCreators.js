import axios from 'axios';
import * as types from './actionTypes';

export function deleteFriend(id) {
    return {
        type: types.DELETE_FRIEND,
        payload: id,
    }
}