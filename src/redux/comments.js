import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state= COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.date = new Date().toISOString();
            comment.id = state.length;
            return state.concat(comment);
        default:
            return state;
    }
}